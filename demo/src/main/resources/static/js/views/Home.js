export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    return `
    <nav class="d-flex justify-content-between align-content-center py-3">
        <span class="logo"><b>Coyote Excavation</b></span>
        <div class="align-self-center me-3 me-md-5">
            <a href="#contact"><button class="btn-blue btn-text contact-btn"><b>CONTACT US</b></button></a>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row row-margin first-section padding-y">
            <div class="col-12 col-md-6 section">
                <div class="title-header">About <b><br>Me Section</b></div>
                <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis maxime praesentium, est pariatur ea, dolorem laborum voluptas nihil modi adipisci dolore necessitatibus minima. Maxime vero praesentium ex sunt. Quisquam, modi. Obcaecati aut aliquid sunt ad fugit ullam, odit illum vitae itaque, rem, neque magnam? Commodi ab id facilis voluptatibus delectus aspernatur, cum iusto amet est in nemo rem asperiores.
                </p>
            </div>
        </div>
        <div class="row grey-bg row-margin padding-y">
            <img src="../images/test.jpg" alt="" class="col-12 col-lg-6 my-5 order-md-2 ps-md-5">
            <div class="col-12 col-lg-6 section order-md-1 pe-md-5">
                <p class="header">Service number 1 <b>That we are providing,</b> so you don't have to!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur numquam aspernatur ipsum quos corporis saepe quo quae temporibus alias quaerat. Facere, vitae fugit asperiores quae libero iure. Consectetur recusandae odio commodi aperiam unde accusantium placeat vel maxime laudantium delectus! Facilis suscipit fuga id nobis? Natus non nesciunt magnam quia.</p>
                <p class="header mt-3">Service number 2 <b>That we are providing,</b> so you don't have to!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur numquam aspernatur ipsum quos corporis saepe quo quae temporibus alias quaerat. Facere, vitae fugit asperiores quae libero iure. Consectetur recusandae odio commodi aperiam unde accusantium placeat vel maxime laudantium delectus! Facilis suscipit fuga id nobis? Natus non nesciunt magnam quia.</p>
            </div>
        </div>
        <div class="row grey-bg row-margin mb-5">
            <div class="col-12 col-lg-6 section order-lg-2 third-section ps-md-5">
                <p class="header"><b>The best way</b> to build a marketing team</p>
                <p>With EBQ, you're not just hiring a marketing specialist. You're getting an entire marketing department at a fraction of the cost and effort of hiring internally.</p>
                <p>For each project, we provide: a Success Manager to drive high-level strategy, a Project Manager to oversee day-to-day operations, and one or more Specialists working diligently to amplify your brand.</p>
            </div>
            <img src="../images/IMG_1229.jpg" alt="" class="col-12 col-lg-6 my-5 order-lg-1 pe-md-5" id="dept-image">
        </div>
        <div class="row grey-bg row-margin padding-y" id="contact">
            <div class="col-6">
                <p class="header">Contact us</p>
                <p>coyoteexcavationlc@gmail.com</p>
                <p>(361) 413-5704</p>
                <p> Odem, TX</p>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col mb-3">
                        <label for="firstNameInput" class="form-label">First Name</label>  
                        <input type="text" class="form-control" aria-label="First name" id="firstNameInput">
                    </div>
                    <div class="col mb-3">
                        <label for="lastNameInput" class="form-label">Last Name</label>  
                        <input type="text" class="form-control" aria-label="Last name" id="lastNameInput">
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailInput">
                    </div>
                    <div class="mb-3">
                        <label for="phoneNumberInput" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="phoneNumberInput" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-456-7890"required>
                        <br>
                        <small>Format: 123-456-7890</small>
                    </div>
                    <div class="mb-3">
                        <label for="messageInput" class="form-label">Message</label>
                        <textarea class="form-control" id="messageInput" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit" id="contactFormBtn">Submit form</button>
                        <span id="emailStatus"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <p class="header">Looking to take your <b>marketing to the next level?</b></p>
        <a href="#contact"><button class="btn-orange btn-text contact-btn mt-5"><b>CONTACT US</b></button></a>
    </footer>
    `;
}

export function HomeEvents() {
    submitFormBtn();
}


function submitFormBtn(){
    document.querySelector('#contactFormBtn').addEventListener("click", function(){

        let name = document.querySelector('#firstNameInput').value + " " + document.querySelector('#lastNameInput').value;
        let email = document.querySelector('#emailInput').value;
        let phoneNumber = document.querySelector('#phoneNumberInput').value
        let message = document.querySelector('#messageInput').value

        let emailStatus = document.querySelector('#emailStatus');

        let emailObject = {
            name,
            email,
            phoneNumber,
            message
        }

        console.log(emailObject);

        const requestObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailObject)
        }

        fetch(apiURL + '/api/email/sendEmail', requestObject).then(function(resp){
            if(resp.ok) {
                emailStatus.innerHTML='Email has been sent!'
                return resp.text();       
            }
            emailStatus.innerHTML='There has been an error sending your email.'
        }).then(function(data) {
            console.log(data);
        }).catch(function(err){
            console.log(err);
        })

    })
}