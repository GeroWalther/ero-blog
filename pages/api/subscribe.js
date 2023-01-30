const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async (req, res) => {
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const { email, fName, lName, emailIsValid } = req.body;

  if (!email || !emailIsValid) {
    return res
      .status(400)
      .json({ error: "Email is required and must match the confirmed email." });
  }

  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fName,
        LNAME: lName,
      },
    });
    console.log("success", email, fName, lName, emailIsValid);
    return res.status(201).json({ error: "" });
  } catch (error) {
    console.log(error, email, fName, lName, emailIsValid);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
