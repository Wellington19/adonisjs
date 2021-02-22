'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      addresses: 'array',
      'addresses.*.street': 'required',
      'addresses.*.number': 'required',
      'addresses.*.city': 'required',
      'addresses.*.state': 'required|min:2|max:2',
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User
