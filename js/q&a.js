        let currentVisibleWrapper = null;
        
        function toggleAnswer(id) {
            const wrapper = document.getElementById(`wrapper${id}`);
            const question = document.querySelector(`.question[onclick="toggleAnswer(${id})"]`);
            
            // 如果点击是当前显示答案，收起
            if (currentVisibleWrapper === wrapper) {
                wrapper.classList.remove('active');
                question.classList.remove('active');
                currentVisibleWrapper = null;
                return;
            }
            
            // 收起之前展开答案
            if (currentVisibleWrapper) {
                const prevId = currentVisibleWrapper.id.replace('wrapper', '');
                document.querySelector(`.question[onclick="toggleAnswer(${prevId})"]`).classList.remove('active');
                currentVisibleWrapper.classList.remove('active');
            }
            
            // 展开新点击答案
            question.classList.add('active');
            wrapper.classList.add('active');
            currentVisibleWrapper = wrapper;
        }