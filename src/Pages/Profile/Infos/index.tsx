import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/Context/Auth/Auth.context'
import { LayoutContent } from '@/Pages/Components/Layout/Content'
import { Card } from '@/Pages/Components/Shared/Card'
import { Input } from '@/Pages/Components/Shared/Input'
import { ref, get, child, getDatabase, set } from 'firebase/database'
import { databaseFirebase } from '@/Config/firebase'
import { AlertsContext } from '@/Pages/Components/Shared/Toast/AlertsProvider.context'
import { searchAddress } from '@/Services/User/Address'

export function ProfileInfos() {
  const authContext = useContext(AuthContext)!
  const dbRef = ref(databaseFirebase)
  const toastData = useContext(AlertsContext)!

  const [form, setForm] = useState({
    zipcode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })

  function setToastMsg(type: 'success' | 'error', msg: string) {
    toastData.update({
      show: true,
      type: type,
      msg: msg,
    })
  }

  function formIsValid() {
    let error = 0
    Object.values(form).forEach(val => {
      if (val === '') {
        error++
      }
    })
    if (error > 0) {
      return false
    }
    return true
  }

  function saveAddress(e: React.FormEvent) {
    e.preventDefault()
    const checkForm = formIsValid()
    const { name, email, photo, uid } = authContext.state
    if (checkForm) {
      authContext.setLoading(true)
      try {
        const db = getDatabase()
        set(ref(db, `users/${authContext.state.uid}`), {
          uid,
          name,
          email,
          photo,
          address: {
            ...form,
          },
        })
        setToastMsg('success', 'Endereço salvo com sucesso!')
      } catch (error) {
        setToastMsg('error', 'Sistema temporariamente indisponível!')
      } finally {
        authContext.setLoading(false)
      }
    } else {
      setToastMsg('error', 'Preencha o endereço corretamente!')
    }
  }

  function updateForm(key: string, value: string) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function getUserData() {
    authContext.setLoading(true)
    get(child(dbRef, `users/${authContext?.state.uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setForm({
            ...snapshot.val().address,
          })
        } else {
          console.log('No data available')
        }
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        authContext.setLoading(false)
      })
  }

  async function localSearchAddress(e: string) {
    authContext.setLoading(true)
    try {
      const address = await searchAddress(form.zipcode)
      setForm(prev => ({
        ...prev,
        street: address.logradouro,
        neighborhood: address.bairro,
        city: address.localidade,
        state: address.uf,
      }))
    } catch (error) {
      setToastMsg('error', 'Ops! Não foi possível buscar o endereço.')
    } finally {
      authContext.setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <LayoutContent title='Minha Conta' subtitle='Atualização de endereço'>
      <form className='row mb-4 mt-5' onSubmit={saveAddress}>
        <div className='col-md-3 mb-sm-4 d-flex align-items-center justify-content-center'>
          <Card image={authContext?.state.photo}>
            {authContext?.state.name} <br />
            <a
              href={`mailto:${authContext?.state.email}`}
              className='btn btn-link p-0'
            >
              {authContext?.state.email}
            </a>
            <div className='mt-3'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => authContext.logout()}
              >
                <i className='bi bi-box-arrow-left me-2'></i> Sair
              </button>
            </div>
          </Card>
        </div>
        <div className='col-md-8'>
          <div className='row g-3'>
            <div className='col-md-3'>
              <Input
                label='CEP'
                props={{
                  id: 'cep',
                  placeholder: '00000-000',
                  value: form.zipcode,
                  onChange: e => updateForm('zipcode', e.currentTarget.value),
                  onBlur: e =>
                    localSearchAddress(
                      e.currentTarget.value.replace(/\D/g, '')
                    ),
                }}
              />
            </div>
            <div className='col-md-9 d-flex align-items-end'>
              <a
                href='https://buscacepinter.correios.com.br/app/endereco/index.php'
                target='_blank'
                className='btn btn-link'
              >
                Não sei o meu CEP
              </a>
            </div>
            <div className='col-md-9'>
              <Input
                label='Logradouro'
                props={{
                  id: 'logradouro',
                  placeholder: 'Av / Rua',
                  value: form.street,
                  onChange: e => updateForm('street', e.currentTarget.value),
                }}
              />
            </div>
            <div className='col-md-3'>
              <Input
                label='Número'
                props={{
                  id: 'numero',
                  placeholder: '0000',
                  value: form.number,
                  onChange: e => updateForm('number', e.currentTarget.value),
                }}
              />
            </div>
            <div className='col-md-6'>
              <Input
                label='Complemento'
                props={{
                  id: 'complemento',
                  placeholder: 'Complemento',
                  value: form.complement,
                  onChange: e =>
                    updateForm('complement', e.currentTarget.value),
                }}
              />
            </div>
            <div className='col-md-6'>
              <Input
                label='Bairro'
                props={{
                  id: 'bairro',
                  placeholder: 'Bairro',
                  value: form.neighborhood,
                  onChange: e =>
                    updateForm('neighborhood', e.currentTarget.value),
                }}
              />
            </div>
            <div className='col-md-4'>
              <Input
                label='Cidade'
                props={{
                  id: 'cidade',
                  placeholder: 'Cidade',
                  value: form.city,
                  onChange: e => updateForm('city', e.currentTarget.value),
                }}
              />
            </div>
            <div className='col-md-4'>
              <Input
                label='Estado'
                props={{
                  id: 'estado',
                  placeholder: 'Estado',
                  value: form.state,
                  onChange: e => updateForm('state', e.currentTarget.value),
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-md-12 mt-4 d-flex justify-content-end border-top pt-4'>
          <button className='btn btn-primary btn-lg' type='submit'>
            Salvar
          </button>
        </div>
      </form>
    </LayoutContent>
  )
}
