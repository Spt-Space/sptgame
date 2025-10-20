        let isScrolling;
		const textContainer = document.querySelector('.dropdown');
        const textContainer2 = document.querySelector('.btnhid');

        window.addEventListener('scroll', function() {
            // 添加隐藏类
            textContainer.classList.add('hidden');
			textContainer2.classList.add('hidden');
            
            // 清除定时器
            clearTimeout(isScrolling);
            
            // 设置新定时器
            isScrolling = setTimeout(function() {
                // 移除隐藏
                textContainer.classList.remove('hidden');
				textContainer2.classList.remove('hidden');
            }, 100); // 100ms后没有滚动显示文字
        });