export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    return `
    <nav class="d-flex justify-content-between">
        <span class="logo">Coyote Excavation</span>
        <div class="align-self-center me-3 me-md-5">
            <a href="https://ebq.com/contact-us/" target="_blank"><button class="btn-blue btn-text contact-btn"><b>CONTACT US</b></button></a>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row row-margin first-section padding-y">
            <div class="col-12 col-md-6 section">
                <div class="title-header">Integrated <b><br>Marketing Service</b></div>
                <p class="mt-3">We turn your marketing plans to action by building on your ideas and executing initiatives alongside you and your team. Get a complete department that can pivot to different ideas of marketing based on your needs.</p>
            </div>
        </div>
        <div class="row white-bg row-margin padding-y">
            <img src="../images/test.jpg" alt="" class="col-12 col-md-6 my-5 order-md-2 ps-md-5">
            <div class="col-12 col-md-6 section order-md-1 pe-md-5">
                <p class="header">We're experts with <b>modern marketing tools,</b> so you don't have to be!</p>
                <p>With hands-on experience in B2B's most innovative apps and tools, we take a data-driven approach to continually improve prospect engagement. Whether we work directly out of your platform ori provide out own insights manually, you always get full visibility into the process</p>
            </div>
        </div>
        <div class="row white-bg row-margin mb-5">
            <div class="col-12 col-lg-6 section order-lg-2 third-section ps-md-5">
                <p class="header"><b>The best way</b> to build a marketing team</p>
                <p>With EBQ, you're not just hiring a marketing specialist. You're getting an entire marketing department at a fraction of the cost and effort of hiring internally.</p>
                <p>For each project, we provide: a Success Manager to drive high-level strategy, a Project Manager to oversee day-to-day operations, and one or more Specialists working diligently to amplify your brand.</p>
            </div>
            <img src="../images/IMG_1229.jpg" alt="" class="col-12 col-lg-6 my-5 order-lg-1 pe-md-5" id="dept-image">
        </div>
    </div>
    <footer class="footer">
        <p class="header">Looking to take your <b>marketing to the next level?</b></p>
        <a href="https://ebq.com/contact-us/" target="_blank"><button class="btn-orange btn-text contact-btn mt-5"><b>CONTACT US</b></button></a>
    </footer>
    `;
}

export function HomeEvents() {
    
}