import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missingparamserror'
import { badRequest } from '../helpers/httphelper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFileds = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFileds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
