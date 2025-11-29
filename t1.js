// 分类菜单项添加点击效果
document.querySelectorAll('.aside a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        alert('您点击了：' + this.textContent.trim());
    });
});
