const ProtonMail = require('protonmail-api');

(async () => {
  const pm = await ProtonMail.connect({
    username: '<your-email>',
    password: '<your-password>'
  })

  // Get page count
  const emailCounts = await pm.getEmailCounts()
  const emailsToArchive = emailCounts['folders']['inbox']['total']
  let emailsArchived = 0;

  while (emailsArchived !== emailsToArchive) {
    // Get emails in inbox
    const emailsInInbox = await pm.getEmails('inbox')

    console.log(`preparing to move ${emailsInInbox.length} emails...`)

    for (const email of emailsInInbox) {
      console.log(`moving ${email.id}`)
      // Moving email to archive
      await email.move('archive')
      emailsArchived++
    }
  }

  console.log('no more emails to archive! ✅')

  pm.close()
})()
