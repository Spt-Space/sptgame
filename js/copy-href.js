		function copy(text,name){
			showNotification(`复制${name}中`,'loading');
			addItem(`复制 <button onclick="showNotification('${name}:${text}','info')" style="outline:1px solid rgba(0,0,0,0.4);font-size:16px;border:none;color:black;background:rgba(0,0,0,0.1);">${name}</button> 中`,'loading');
			setTimeout(()=>{
				navigator.clipboard.writeText(text);
				showNotification(`复制${name}成功`,'success');
				addItem(`复制 <button onclick="showNotification('${name}:${text}','info')" style="outline:1px solid rgba(0,0,0,0.4);font-size:16px;border:none;color:black;background:rgba(0,0,0,0.1);">${name}</button> 成功`,'success');
			},Math.floor(Math.random() * 500) + 1);
		}

		function href(url,name){
			showNotification(`跳转${name}中`,'loading');
			addItem(`跳转 <button onclick="showNotification('${name}:${url}','info')" style="outline:1px solid rgba(0,0,0,0.4);font-size:16px;border:none;color:black;background:rgba(0,0,0,0.1);">${name}</button> 中`,'loading');
			setTimeout(()=>{
				showNotification(`跳转${name}成功`,'success');
				addItem(`跳转 <button onclick="showNotification('${name}:${url}','info')" style="outline:1px solid rgba(0,0,0,0.4);font-size:16px;border:none;color:black;background:rgba(0,0,0,0.1);">${name}</button> 成功`,'success');
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