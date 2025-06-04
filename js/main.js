document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // 导航按钮的页面跳转功能
  const navButtons = document.querySelectorAll('.nav-btn');
  console.log(`Found ${navButtons.length} nav buttons`);
  
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('Nav button clicked');
      const targetPage = button.getAttribute('data-target');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = targetPage;
      }, 250);
    });
  });

  // 项目详情按钮的滚动功能
  document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Project button clicked');
      
      const targetId = this.dataset.target;
      console.log(`Target ID: ${targetId}`);
      
      if (!targetId) {
        console.error('Button has no data-target attribute');
        return;
      }
      
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) {
        console.error(`Element with ID "${targetId}" not found`);
        return;
      }
      
      console.log('Target element found:', targetElement);
      
      // 简化滚动逻辑 - 不需要考虑导航栏高度
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // 滚动到元素顶部
      });
    });
  });

  // 修改：项目详情按钮的页面跳转功能（新增部分）
  document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止默认链接行为
      console.log('Project button clicked');
      
      // 获取链接中的目标页面
      const targetPage = this.getAttribute('href');
      console.log(`Target page: ${targetPage}`);
      
      // 应用相同的淡出效果
      document.body.classList.add('fade-out');
      
      // 延迟跳转以允许动画完成
      setTimeout(() => {
        window.location.href = targetPage;
      }, 250);
    });
  });
});