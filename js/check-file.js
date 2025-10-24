		function checkFileExists(filePath,fileName,fileType,show) {
				let response = null;
                //使用fetchAPI检测文件
				switch(show){
					case 'show' :
						showNotification(`检测 ${fileType}:${fileName} 中...`,'loading');
						break;
					default:
					break;
				}

				addItem(`检测 <button onclick="showNotification('${fileType}:${fileName}<p>${filePath}</p>','info')" class="logHighlight-name" id="logHighlight">${fileType}:${fileName}</button> 中 <button id="logHighlight" class="logHighlight" onclick="copyNoItem('${filePath}','详细地址')"> <i class="fas fa-copy"></i>详细地址</button>`,'loading');
				setTimeout(()=>{
                	fetch(filePath, {
                    	method: 'HEAD'
                	})
                	.then(response => {
                    	if (response.ok) {
							switch(show){
								case 'show' :
									showNotification(`${fileType}:${fileName} 加载成功`,'success');
									break;
							}
							addItem(`<button onclick="showNotification('${fileType}:${fileName}<p>${filePath}</p>','info')" class="logHighlight-name" id="logHighlight">${fileType}:${fileName}</button> 加载成功  <button class="logHighlight" id="logHighlight" onclick="copyNoItem('${filePath}','详细地址')"> <i class="fas fa-copy"></i>详细地址</button>`,'success');
                    	} else {
							switch(show){
								case 'show' :
									showNotification(`${fileType}:${fileName} 加载失败`,'error');
									break;
							}
							addItem(`<button onclick="showNotification('${fileType}:${fileName}<p>${filePath}</p>','info')" class="logHighlight-name" id="logHighlight">${fileType}:${fileName}</button> 加载失败  <button class="logHighlight" id="logHighlight" onclick="copyNoItem('${filePath}','详细地址')"> <i class="fas fa-copy"></i>详细地址</button>`,'error');
                    	}
                	})
                	.catch(error => {
						switch(show){
								case 'show' :
									showNotification(`检测 ${fileType}:${fileName} 失败<p>原因:${error.message}</p>`,'error');
									break;
						}
						addItem(`<button onclick="showNotification('${fileType}:${fileName}<p>${filePath}</p>','info')" class="logHighlight-name" id="logHighlight">${fileType}:${fileName}</button> 拉取检测失败<p>原因:${error.message}  <button id="logHighlight" class="logHighlight" onclick="copyNoItem('${filePath}','详细地址')"> <i class="fas fa-copy"></i>详细地址</button> <button class="logHighlight-error" id="logHighlight" onclick="copyNoItem('${error.message}','详错误信息')"> <i class="fas fa-copy"></i>错误信息</button></p>`,'error');
                	});	
				},Math.floor(Math.random() * (1000-500) + 500));
            }