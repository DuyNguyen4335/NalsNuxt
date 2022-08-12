<template>
    <div>
        <footer>
            <b-row class="text-center">
                <b-col sm="4" md="4" lg="4">
                    <img src="images/1.png" class="footer-img" alt="">
                    <hr class="light">
                    <p>111-222-3333</p>
                    <p>nguyenvinhduydn@gmail.com</p>
                    <p>Ngu Hanh Son - Da Nang</p>
                </b-col>
                <b-col sm="4" md="4" lg="4">
                    <hr class="light">
                    <h5>Working hours</h5>
                    <hr class="light">
                    <p>Monday-Friday: 8am - 5pm</p>
                    <p>Weekend: 8am - 12am</p>
                </b-col>
                <b-col sm="4" md="4" lg="4">
                    <hr class="light">
                    <h5>Services</h5>
                    <hr class="light">
                    <p>Outsourcing</p>
                    <p>Website development</p>
                    <p>Mobile applications</p>
                </b-col>
                <b-col sm="12" md="12" lg="12">
                    <hr class="light-100">
                    <h5>&copy; WebPro</h5>
                </b-col>
            </b-row>
        </footer>
    </div>
</template>
<script>
export default {
    name : 'comp-footer'
}
</script>
<style>
    footer {
        background-color: #3f3f3f;
        color: #d5d5d5;
    }
    hr.light {
        border-top: 1px solid #d5d5d5;
        width: 45%;
    }
    .footer-img{
        width: 200px;
    }
    .light-100 {
        border-top: 1px solid #d5d5d5;
        width: 100%;
    }
</style>