<template>
	<view class="content">
		<view class="aaa" v-for="(item, index) in acupointList" :key="index" @click="acupointClick(index)" :class="[(item.show ? 'ddd' : '')]">{{index}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				acupointList: [
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					},
					{
						show: false
					}
				]
			};
		},
		methods: {
			acupointClick(index){
				this.acupointList[index].show = !this.acupointList[index].show
			}
		}
	}
</script>

<style lang="scss">
	
	.content{
		display: flex;
	}
	
	.aaa{
		margin-right: 30rpx;
		width: 100px;
		height: 100px;
		background-color: #007AFF;
		transition: 1s ease all;
	}
	.ddd{
		position: absolute;
		width: calc(100vw - 60rpx);
		height: calc(100vh - 300rpx);
		left: 30rpx;
		margin-left: 0rpx;
	}
</style>
