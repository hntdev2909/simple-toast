// Toast function
function toast({ type = 'info', duration = 3000 }) {
	const main = document.getElementById('toast');
	if (main) {
		const toast = document.createElement('div');

		// Auto remove toast
		const autoRemoveId = setTimeout(function () {
			main.removeChild(toast);
		}, duration + 1000);

		//  Remove toast when clicked
		toast.onclick = function (e) {
			if (e.target.closest('.toast__close')) {
				main.removeChild(toast);
				clearTimeout(autoRemoveId);
			}
		};

		const icons = {
			success: 'fa-check-circle',
			info: 'fa-info-circle',
			warn: 'fa-exclamation-circle"',
			error: 'fa-exclamation-circle"',
		};

		const titles = {
			success: 'Success',
			info: 'Info',
			warn: 'Warning',
			error: 'Error',
		};

		const messages = {
			success: 'Bạn đã đăng ký thành công',
			info: 'Thông tin đã được gửi đến mail của bạn',
			warn: 'Một số thông tin chưa hợp lệ',
			error: 'Một số lỗi bất ngờ, vui lòng thử lại',
		};

		toast.classList.add('toast', `toast--${type}`);

		toast.innerHTML = `
            <div class="toast__icon">
                <i class="fas ${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${titles[type]}</h3>
                <p class="toast__msg">
                    ${messages[type]}
                </p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
		main.appendChild(toast);
	}
}

function showToast(e) {
	toast({
		type: e,
	});
}
