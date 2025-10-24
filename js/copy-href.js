		function copy(text,name){
			showNotification(`复制${name}中`,'loading');
			addItem(`复制 <button id="logHighlight" onclick="showNotification('${name}:${text}','info')" class="logHighlight-name">${name}</button> 中`,'loading');
		
			setTimeout(()=>{
				navigator.clipboard.writeText(text);
				showNotification(`复制${name}成功`,'success');
				addItem(`复制 <button id="logHighlight" onclick="showNotification('${name}:${text}','info')" class="logHighlight-name">${name}</button> 成功`,'success');
				
			},Math.floor(Math.random() * 500) + 1);
		}

		function href(url,name){
			showNotification(`跳转${name}中`,'loading');
			addItem(`跳转 <button id="logHighlight" onclick="showNotification('${name}:${url}','info')" class="logHighlight-name">${name}</button> 中`,'loading');
			
			setTimeout(()=>{
				showNotification(`跳转${name}成功`,'success');
				addItem(`跳转 <button id="logHighlight" onclick="showNotification('${name}:${url}','info')" class="logHighlight-name">${name}</button> 成功`,'success');
				window.location.assign(`${url}`);
				
			},Math.floor(Math.random() * 500) + 1);
		}

		function copyNoItem(text,name){
			showNotification(`复制${name}中`,'loading');
			
			setTimeout(()=>{
				navigator.clipboard.writeText(text);
				showNotification(`复制${name}成功`,'success');
				
			},Math.floor(Math.random() * 500) + 1);
		}

		function newhref(url,name){
			showNotification(`跳转${name}中`,'loading');
			addItem(`跳转 <button id="logHighlight" onclick="showNotification('${name}:${url}','info')" class="logHighlight-name">${name}</button> 中`,'loading');
			
			setTimeout(()=>{
				showNotification(`跳转${name}成功`,'success');
				addItem(`跳转 <button id="logHighlight" onclick="showNotification('${name}:${url}','info')" class="logHighlight-name">${name}</button> 成功`,'success');
				window.open(`${url}`, '_blank');
				
			},Math.floor(Math.random() * 500) + 1);
		}