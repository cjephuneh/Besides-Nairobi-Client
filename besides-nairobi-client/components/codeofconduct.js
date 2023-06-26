import React from 'react'

const codeofconduct = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images.jpeg')", height: "50vh" }}>
        <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">Welcome to Bsides Nairobi</h1>
        </div>
      </div>
      <div>
        <h1> Conference Code of Conduct</h1>
        <p> All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.</p>
        <span>BSides Nairobi conference has ZERO tolerance for physical, verbal and sexual harassment of any kind.  </span>
        <span>We are dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, 
         age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), education or technology 
          choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any
           conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may 
           be sanctioned or expelled from the conference without a refund at the discretion of the organisers.</span>

       <span>
       We expect all participants of BSides Melbourne to show basic decency and common sense that includes supporting speakers and volunteers who
       have committed their time to make BSides possible and successful. BSides Melbourne will take any complaint of harassment seriously.
       </span>
       <span>
        BSides “Code of Conduct” is simple “Be Excellent to Each Other” and “Do not be an Arse or we will kick you out!”. If someone asks you to stop, please STOP! 
       </span>
        <span>
        We expect all volunteers, sponsors, and participants to READ, AGREE and FOLLOW our code of conduct. If you are being harassed, notice that someone 
        else is being harassed, or have any other concerns, please contact us or identify our conference staff who are wearing branded clothing. 
        </span>

        <span>
          We welcome you to Bsides Nairobi
        </span>

        <span>
          Credit to original source: codeofconduct.com
        </span>

      </div>
    </div>
    
  )
}

export default codeofconduct
