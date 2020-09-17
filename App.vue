<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		width: 100vw;
		height: 100%;
	} 
	.content{
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
		padding: 30rpx;
		box-sizing: border-box;
	}
</style>
