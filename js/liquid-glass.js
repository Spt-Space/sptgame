        const slider = document.getElementById('iSlider');
        const valueDisplay = document.getElementById('iValue');
        
        // 初始化显示
        updateValue();
        
        // 滑块拖动事件
        slider.addEventListener('input', updateValue);
        
        function updateValue() {
            const i = slider.value / 10;
            valueDisplay.textContent = i;
			document.documentElement.style.setProperty('--glass-blur', `${i}px`);
        }