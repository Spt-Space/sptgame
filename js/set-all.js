		document.addEventListener('DOMContentLoaded', function() {
			showNotification('HTML&CSS加载完成', 'success');
			addItem('网页加载完成','success');
            // 获取所有按钮
            const buttons = document.querySelectorAll('.btn');
            
            // 为每个按钮添加点击事件
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    // 获取目标内容ID
                    const targetId = this.getAttribute('data-target');
                    
                    // 隐藏所有内容介绍
                    document.querySelectorAll('.content-intro').forEach(intro => {
                        intro.style.display = 'none';
                    });
                    
                    // 显示目标内容介绍
                    document.getElementById(targetId).style.display = 'block';
                });
            });
            
            // 默认显示"关于我们"内容
            document.getElementById('about').style.display = 'block';
		    changeText(0);
			
			setTimeout(function() {
				showNotification('图片加载需要一些时间', 'warning');
				setTimeout(function(){
					checkFileExists('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css','Font-awesome','CSS','show');
					setTimeout(function(){
						showNotification('首次加载字体较慢，请耐心等待','warning');
					},1500);
				},1500);
			}, 1500);
        });