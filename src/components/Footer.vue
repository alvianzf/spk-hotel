<template>
    <b-navbar fixed="bottom" type="dark" variant="info">
        <b-navbar-nav>
            <b-nav-item id="foot">
                <sub>{{message}}</sub>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {
        message: '2019 | Alex Teo'
        }
    }
}
</script>