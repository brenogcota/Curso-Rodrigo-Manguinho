import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missingparamserror'
import { badRequest } from '../helpers/httphelper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
