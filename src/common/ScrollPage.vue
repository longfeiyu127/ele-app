<template>
    <div class="scrollPage content" ref="scrollPage">
        <div ref="scrollContent" class="wrapper clearfix">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'scroll-page',
    data(){
        return{
            moveY : 0,
            y:0,
        }
    },
    methods:{
		scrollTo(targetY){
			// console.log(targetY)
			// this.$refs.scrollContent.style.transform = 'translateY('+ targetY +'px)';
			this.moveY=targetY;
			this.$refs.scrollContent.className = 'wrapper clearfix resize';
			this.$refs.scrollContent.style.transform = 'translateY('+ targetY +'px)';
			setTimeout(function(){
				this.$refs.scrollContent.className = 'wrapper clearfix';
			}.bind(this), 200);
		},
		goToTarget(scrollY){
			this.$emit('ToTarget',-scrollY)
		}
    },
    mounted () {
            let content = this.$refs.scrollPage;
			let wrapper = this.$refs.scrollContent;
			//添加开始滚动
			content.addEventListener('touchstart', function(ev){
                // console.log(ev);
                let self=this;
				let touch = ev.changedTouches[0];
				//记录开始滚动的位置
				let disY = touch.clientY - wrapper.offsetTop;
				let isUp = true;
				//添加正在滚动
				function moveFunc(ev){
					let touch = ev.changedTouches[0];
					self.y = touch.clientY - disY + self.moveY;
					if(touch.clientY - disY > 0){
						isUp = false;
					}else{
						isUp = true;
					}
					//让内容跟着移动
					// console.log(self.y)
					if(self.y<=0){
						wrapper.style.transform = 'translateY('+ self.y +'px)';
						// console.log(self.goToTarget)
						// self.goToTarget(self.y)
					}
					// wrapper.style.transform = 'translateY('+ self.y +'px)';
					
					
				}
				document.addEventListener('touchmove', moveFunc);
				
				//添加停止滚动
				function endFunc(){
			
					handleEnd();
					
					
					function handleEnd(){
					
                    //记录停止的Y值
					self.moveY = self.y;
					// console.log(self.moveY)
					self.goToTarget(self.y)
					//判断滚动的临界值
					if(self.moveY > 0){
						self.moveY = 0;
						wrapper.className = 'wrapper clearfix resize';
						wrapper.style.transform = 'translateY(0)';
						setTimeout(function(){
							wrapper.className = 'wrapper clearfix';
						}, 200);
					}
					
                    let maxScrollY = content.offsetHeight - wrapper.offsetHeight;
                    // console.log(content.offsetHeight)
                    // console.log(wrapper)
                    // console.log(wrapper.offsetHeight)
					if(self.moveY <= maxScrollY){
						// console.log('需要收回');
						self.moveY = maxScrollY;
						wrapper.className = 'wrapper clearfix resize';
						wrapper.style.transform = 'translateY('+maxScrollY+'px)';
						setTimeout(function(){
							wrapper.className = 'wrapper clearfix';
						}, 200);
					}
						
					}
					
					//移除事件监听
					document.removeEventListener('touchmove', moveFunc);
					document.removeEventListener('touchend', endFunc);
					document.removeEventListener('touchcancel', endFunc);
				}
				document.addEventListener('touchend', endFunc);
				document.addEventListener('touchcancel', endFunc);
				
			}.bind(this))
    }
};
</script>

<style scoped lang='scss'>
.scrollPage{
    position: relative;
    height: 100%;
    overflow: hidden;
}
.resize{
transition: 200ms transform;
}

</style>