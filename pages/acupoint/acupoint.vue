<template>
	<view class="content">
		
		<view class="acupoint-view">
			<view class="mask" v-if="(acupointList[0].show || acupointList[1].show || acupointList[2].show || acupointList[3].show)"></view>
			<scroll-view scroll-y class="acupoint-item" :class="(item.show ? 'float-item' : '')" v-for="(item, index) in acupointList" :key="index" @click="acupointClick(index)">
				<!-- {{tem.list[0].title}} -->
				<view class="check-view" @click="checkViewClick">
					<acupoint-steps :list="item.list" :layer="item.layer" :step="item.step" v-if="item.reFresh" @stepChange="stepChange" @sliderChange="calcAcupoint"></acupoint-steps>
					
					<view class="slider-view">
						<slider :value="item.layer" show-value min="1" max="9" activeColor="#007AFF" @change="sliderChange" @changing="sliderChange" />
					</view>
					<text>{{item.text}}</text>
					<view class="colse-btn" @click="acupointHide">关闭</view>
				</view>
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import acupointSteps from '@/components/acupoint-steps/acupoint-steps'
	export default {
		components: {
			acupointSteps
		},
		data() {
			return {
				acupointIndex: 0,
				acupointList: [
					{
						show: false,
						list:[
							{
								title: '我是文字',
								num: [10, 20, 30, 40, 50]
							}, 
							{
								title: '我是文字',
								num: [10, 20, 30, 40, 50]
							}, 
							{
								title: [
									{ label: 'aa', value: 0, num: [10, 20, 30, 40, 50] },
									{ label: 'bb', value: 1, num: [10, 20, 30, 40, 50] },
									{ label: 'cc', value: 2, num: [10, 20, 30, 40, 50] },
								],
								selectTitle: '',
								selectIndex: 0,
							},
							{
								title: '我是文字',
								num: [10, 20, 30, 40, 50]
							}, 
							{
								title: '我是文字',
								num: [10, 20, 30, 40, 50]
							}, 
							{
								title: '我是文字',
								num: [10, 20, 30, 40, 50]
							}
							
						],
						layer: 2,
						step: 3,
						reFresh: true,
						text: ''
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
				
				
			}
		},
		methods: {
			acupointClick(index){
				console.log('acupointClick')
				this.acupointIndex = index
				
				// for(let i = 0, len = this.acupointList.length; i < len; i++){
				// 	this.acupointList[i].show = false
				// }
				this.acupointList[index].show = true
				// this.acupointList[index].show = !this.acupointList[index].show
			},
			
			acupointHide(){
				this.acupointList[this.acupointIndex].show = false
			},
			
			checkViewClick(){
				console.log('checkViewClick')
			},
			
			sliderChange(e){
				// console.log(e.detail.value)
				this.acupointList[this.acupointIndex].layer = e.detail.value
				// console.log(this.acupointList[this.acupointIndex])
				this.calcAcupoint()
			},
			
			//步骤条变化，获取当前经脉的总属性
			stepChange(e){
				//设置当前选中的步长
				this.acupointList[this.acupointIndex].step = e
				this.calcAcupoint()
				
			},
			
			calcAcupoint(){
				//获取当前经脉数组
				let acupoint = this.acupointList[this.acupointIndex]
				let text = ''
				
				
				//遍历经脉，计算所选layer的上一层总和，再加上所选step的值
				for(let i in acupoint.list){
					//item为当前经脉
					let item = acupoint.list[i]
					
					//获取当前经脉的等级layer和层级step
					let layer = acupoint.layer - 1
					let step = acupoint.step - 1
					// console.log(layer, step)
					//若i > step 则为未选中状态，值应该为上一等级的值，即layer - 1。若layer = -1则为值undefine，在下面进行判断。
					if(i > step){
						layer = layer - 1
					}
					
					//判断是否为数组，是数组则为多选经脉，进行特殊处理
					if(Array.isArray(item.title)){
						//selectTitle为空则默认第一项，值为undedine则为0
						text += ( item.selectTitle || item.title[0].label ) + '+' + ( item.title[item.selectIndex].num[layer] || 0 ) + ' , '
					}else{
						text += item.title + '+' + ( item.num[layer] || 0 ) + ' , '
					}
					
				}
				console.log(text)
			}
			
			
		}
	}
</script>

<style lang="scss">
	.acupoint-view{
		width: 100%;
		height: auto;
		
		.acupoint-item{
			// width: calc((100vw - 150rpx) / 4);
			// height: 300rpx;
			width: calc(100vw - 60rpx);
			// height: 1200rpx;
			height: 80vh;
			background-color: #FFFFFF;
			transition: 0.5s ease all;
			position: absolute;
			z-index: 10;
			text-align: center;
			transform: scale(0.2, 0.2);
			transform-origin: left top;
			padding: 30rpx;
			box-sizing: border-box;
			
			.check-view{
				width: 100%;
				height: 100%;
				padding-bottom: 110rpx;
				box-sizing: border-box;
				// height: 50%;
				// background-color: #3F536E;
				
				
				.slider-view{
					// width: 50%;
					margin: 100rpx 0rpx;
				}
				
				.colse-btn{
					width: 100%;
					height: 80rpx;
					color: #FFFFFF;
					background-color: #007AFF;
					font-size: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					bottom: 0rpx;
				}
				
			}
			
		}
		
		.acupoint-item:nth-child(1){
			left: 30rpx;
		}
		.acupoint-item:nth-child(2){
			left: calc(((100vw - 150rpx) / 4) + 60rpx);
			// background-color: #007AFF;
		}
		.acupoint-item:nth-child(3){
			left: calc(((100vw - 150rpx) / 2) + 90rpx);
			// background-color: #4CD964;
		}
		.acupoint-item:nth-child(4){
			left: calc(((100vw - 150rpx) / 4) * 3 + 120rpx);
			// background-color: #DD524D;
			// right: 30rpx;
		}
		
		.float-item{
			transform: scale(1, 1);
			left: 30rpx !important;
			z-index: 15;
		}
		
		
		.acupoint-item:nth-child(4){
			margin-right: 0rpx;
		}
		
		.mask{
			position: absolute;
			height: 100%;
			top: 0rpx;
			bottom: 0rpx;
			left: 0rpx;
			right: 0rpx;
			background-color: rgba(0, 0, 0, 0.2);
			z-index: 13;
		}
		
		
	}
</style>
