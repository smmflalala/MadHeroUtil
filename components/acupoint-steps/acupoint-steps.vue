<template>
	<view class="step-view">
		<view class="step-item" v-for="(item, index) in list" :key="index">
			<view class="step-radio" :class="item.choose ? 'step-radio-check' : ''" @click="stepClick(index)"></view>
			<text class="title" v-if="!Array.isArray(item.title)">{{item.title}}{{item.num[layer - 1]}}</text>
			<block v-if="Array.isArray(item.title)">
				<easy-select ref="easySelect" size="mini" :value="( item.selectTitle || item.title[0].label )+ item.title[0].num[layer - 1]" :index="index" :options="item.title" @select="selectOption"></easy-select>
			</block>
		</view>
	</view>
</template>

<script>
	import easySelect from '@/components/easy-select/easy-select'
	import tuiIcon from '@/components/tui-icon/tui-icon'
	export default {
		components: {
			easySelect,
			tuiIcon
		},
		props: {
			list: {
				type: [Object, Array],
				default() {
					return [];
				}
			},
			step: {
				type: [Number, String],
				default: 0
			},
			layer: {
				type: [Number, String],
				default: 0
			},
			show: {//是否展开，展开点击事件才有效
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
			this.initStep()
		},
		methods: {
			//步骤选项点击事件
			stepClick(index){
				//未展开时阻止点击事件
				if(!this.show){ return }
				
				// console.log(this.list)
				//若未初始化，或为未选中状态，则初始化或改为选中状态
				if(!this.list[index].choose){
					// console.log('选择')
					//把点击项前的全部项改为选中状态
					for(let i = 0; i < index + 1; i++){
						//采用$set()的方法
						// let item = { choose: true, title: this.list[i].title, num: this.list[i].num }
						let item = this.list[i]
						item.choose = true
						this.$set(this.list, i, item)
					}
					
					//返回步骤条的选中值index。选择状态返回index + 1
					this.stepChange(index + 1)
				}else{
					// console.log('取消')
					//把点击项后的全部项改为未选中状态
					for(let i = index; i < this.list.length; i++){
						// let item = { choose: false, title: this.list[i].title, num: this.list[i].num }
						let item = this.list[i]
						item.choose = false
						this.$set(this.list, i, item)
					}
					
					//返回步骤条的选中值index。取消选择状态返回index
					this.stepChange(index)
				}
				
				
			},
			
			//初始化选择层数
			initStep(){
				for(let i = 0; i < this.list.length; i++){
					let item = this.list[i]
					if(i <= this.step - 1){
						item.choose = true
						// let item = { choose: true, title: this.list[i].title, num: this.list[i].num }
						this.$set(this.list, i, item)
					}else{
						// let item = { choose: false, title: this.list[i].title, num: this.list[i].num }
						item.choose = false
						this.$set(this.list, i, item)
					}
					
					// if(Array.isArray(this.list[i].title)){
					// 	let item = this.list[i]
					// 	item.selectTitle: ''
					// 	item.selectIndex: 0
					// }
					
					
				}
				// console.log(this.list)
			},
			
			//下拉选择事件
			selectOption(option, index){
				
				//未展开时阻止点击事件
				if(!this.show){ return }
				
				// console.log(option, index)
				let item = this.list[index]
				item.selectTitle = option.label
				item.selectIndex = option.value
				this.$set(this.list, index, item)
				
				this.$emit('calcAcupoint')
			},
			
			stepChange(index){
				//未展开时阻止点击事件
				if(!this.show){ return }
				
				this.$emit('stepChange', index)
			}
			
		}
	}
</script>

<style lang="scss">
	.step-view{
		display: inline-block;
		position: relative;
		
		&::before{
			content: '';
			width: 1rpx;
			height: 100%;
			background-color: #007AFF;
			position: absolute;
			left: 22rpx;
			// top: 36rpx;
		}
		
		.step-item{
			display: flex;
			align-items: center;
			// justify-content: center;
			background-color: #FFFFFF;
			// height: 100rpx;
			margin: 100rpx 0rpx;
			position: relative;
			
			&::before{
				content: '';
				width: 100%;
				height: 10rpx;
				background-color: #FFFFFF;
				position: absolute;
				top: -10rpx;
			}
			
			&::after{
				content: '';
				width: 100%;
				height: 10rpx;
				background-color: #FFFFFF;
				position: absolute;
				bottom: -10rpx;
			}
			
			.step-radio{
				width: 36rpx;
				height: 36rpx;
				border-radius: 100%;
				border: 4rpx solid #007AFF;
				background-color: #FFFFFF;
				margin-right: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				// font-size: 26rpx;
				// color: #007AFF;
			}
			
			.step-radio-check{
				&::before{
					content: '';
					width: 20rpx;
					height: 20rpx;
					border-radius: 100%;
					background-color: #007AFF;
					position: absolute;
					left: 8rpx;
					top: 8rpx;
				}
			}
			
			.title{
				height: 50rpx;
				line-height: 50rpx;
				font-size: 34rpx;
				color: #595959;
			}
			
		}
		
		.step-item:first-child{
			margin-top: 10rpx;
		}
		
		.step-item:last-child{
			margin-bottom: 10rpx;
		}
		
		
	}
</style>
