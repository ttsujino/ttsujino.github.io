function loadCommonElements() {
  // header.html の読み込み
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Header file not found');
      }
      return response.text();
    })
    .then(data => {
      const headerEl = document.getElementById('header');
      if (headerEl) {
        headerEl.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading header:', error));

  // footer.html の読み込み
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Footer file not found');
      }
      return response.text();
    })
    .then(data => {
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        footerEl.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const isIndex = window.location.pathname.endsWith("index.html") ||
                    window.location.pathname === "/" ||
                    window.location.pathname === "";
    const navLinks = document.querySelectorAll('.nav-link');
  
    if(isIndex) {
      // indexページ：アンカーリンクはスムーズスクロール
      navLinks.forEach(link => {
        if(link.getAttribute('href').startsWith('#')) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          });
        }
      });
      // WORKS内のプロジェクトリンク：フェードアウトしてから遷移
      const projectLinks = document.querySelectorAll('.project a');
      projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = link.getAttribute('href');
          }, 500);
        });
      });
      // Load More ボタン：クリックで全プロジェクトページ（works.html）へ遷移
      const loadMoreBtn = document.getElementById('loadMoreBtn');
      if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = "works.html";
          }, 500);
        });
      }
    } else {
      // projectページ：すべてのナビゲーションリンクでフェードアウトして遷移
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = link.getAttribute('href');
          }, 500);
        });
      });
    }
  
    // HOMEセクションは index ページ読み込み時にふわっと表示
    const homeSection = document.getElementById('home');
    if(homeSection) {
      homeSection.classList.add('visible');
    }
  
    // カスタムカーソルの追従
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  
    // Intersection Observerで各セクションにフェードインエフェクトを適用
    const sections = document.querySelectorAll('.section');
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
  });
  