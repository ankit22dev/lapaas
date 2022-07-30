// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const fs = require("fs");

export default function handler(req, res) {

  const finished = () => {
    res.status(200).json({ info: 'successfully' })
  }

  const jsonData = JSON.stringify({
    PriceRange: req.body.PriceRange,
    NameUser: req.body.NameUser,
    PhoneNumber: req.body.PhoneNumber,
    EmailUser: req.body.EmailUser
  }, null, 2)

  fs.writeFile('developmentFormData.json', jsonData, finished)
}