<script>
	export default {
		onLaunch: function() {
		    this.$store.dispatch('initData')
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
    /*@import "colorui/main.css";*/
    @import './static/style/thorui.css';
    @import "./common/app.css";
	/*每个页面公共css */
    @import "common/style/basicsComponentsStyle.scss";
    @import "common/style/myStyle.scss";


    body,html{
        font-size: 16px;
    }
    ::-webkit-scrollbar {
        display: none;
    }

</style>
