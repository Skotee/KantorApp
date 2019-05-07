import sendgridMail from '@sendgrid/mail'
import config from '../../../config/config'

sendgridMail.setApiKey(config.SENDGRID_API_KEY)

export default class SendgridClient {
  static sendMail({ to, from, subject, html }) {
    const messageData = { to, from: 'info@meme-lib.com', subject, html }

    if (Array.isArray(to)) return sendgridMail.sendMultiple(messageData)
    else return sendgridMail.send(messageData)
  }
}
