/* ============================================================
   深圳小众烟火美食打卡 - 主逻辑脚本
   包含：导航栏、收藏系统(localStorage)、Toast提示、盲盒随机推荐等
   ============================================================ */

/* ============ DOM 加载完成后初始化 ============ */
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initFavSystem();
});

/* ============================================================
   一、导航栏模块
   ============================================================ */

/**
 * 初始化导航栏
 * - 高亮当前页面对应的导航项
 * - 移动端汉堡菜单展开/收起
 */
function initNavbar() {
    // 高亮当前页面导航
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.replace('./', '').replace('/', ''))) {
            link.classList.add('active');
        }
    });

    // 移动端汉堡菜单切换
    const toggleBtn = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // 点击导航链接后关闭菜单
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });

        // 点击页面空白处关闭菜单
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
}

/* ============================================================
   二、收藏系统（localStorage）
   存储结构：
   {
     wantToGo: [shopId1, shopId2, ...],      // 想去打卡
     alreadyEaten: [shopId3, shopId4, ...]    // 已经吃完打卡
   }
   ============================================================ */

const STORAGE_KEY = 'sz_food_favorites';

/**
 * 读取收藏数据
 * @returns {Object} { wantToGo: [], alreadyEaten: [] }
 */
function getFavorites() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.warn('读取收藏数据失败:', e);
    }
    // 返回默认空结构
    return { wantToGo: [], alreadyEaten: [] };
}

/**
 * 保存收藏数据到 localStorage
 * @param {Object} data - 收藏数据对象
 */
function saveFavorites(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('保存收藏数据失败:', e);
        showToast('收藏失败，可能存储空间不足');
    }
}

/**
 * 切换店铺的收藏状态
 * @param {number} shopId - 店铺ID
 * @param {string} group - 分组名称 'wantToGo' | 'alreadyEaten'
 * @returns {boolean} - 是否已收藏（true=已收藏, false=已取消）
 */
function toggleFavorite(shopId, group) {
    const fav = getFavorites();
    const shopIdNum = parseInt(shopId);

    // 先从另一个分组中移除（一个店铺不能同时属于两个分组）
    const otherGroup = group === 'wantToGo' ? 'alreadyEaten' : 'wantToGo';
    fav[otherGroup] = fav[otherGroup].filter(id => id !== shopIdNum);

    // 在当前分组中切换
    const index = fav[group].indexOf(shopIdNum);
    if (index === -1) {
        // 不存在则添加
        fav[group].push(shopIdNum);
        saveFavorites(fav);
        return true;
    } else {
        // 已存在则移除
        fav[group].splice(index, 1);
        saveFavorites(fav);
        return false;
    }
}

/**
 * 检查店铺是否已收藏
 * @param {number} shopId - 店铺ID
 * @returns {object|null} - { group: 'wantToGo'|'alreadyEaten' } 或 null
 */
function checkFavorite(shopId) {
    const fav = getFavorites();
    const shopIdNum = parseInt(shopId);
    if (fav.wantToGo.includes(shopIdNum)) {
        return { group: 'wantToGo' };
    }
    if (fav.alreadyEaten.includes(shopIdNum)) {
        return { group: 'alreadyEaten' };
    }
    return null;
}

/**
 * 移动收藏项（从一个分组移到另一个分组）
 * @param {number} shopId - 店铺ID
 * @param {string} fromGroup - 来源分组
 * @param {string} toGroup - 目标分组
 */
function moveFavorite(shopId, fromGroup, toGroup) {
    const fav = getFavorites();
    const shopIdNum = parseInt(shopId);

    // 从来源分组移除
    fav[fromGroup] = fav[fromGroup].filter(id => id !== shopIdNum);

    // 添加到目标分组（避免重复）
    if (!fav[toGroup].includes(shopIdNum)) {
        fav[toGroup].push(shopIdNum);
    }

    saveFavorites(fav);
}

/**
 * 初始化页面中的收藏按钮状态
 * 遍历所有 .btn-fav 元素，根据 localStorage 数据设置初始状态
 */
function initFavSystem() {
    const favButtons = document.querySelectorAll('.btn-fav');
    favButtons.forEach(btn => {
        const shopId = parseInt(btn.dataset.shopId);
        if (!shopId) return;

        const favStatus = checkFavorite(shopId);
        if (favStatus) {
            btn.classList.add('favorited');
            btn.dataset.favGroup = favStatus.group;
        }
    });
}

/* ============================================================
   三、Toast 弹窗提示
   ============================================================ */

/**
 * 显示轻提示
 * @param {string} message - 提示文字
 * @param {number} duration - 显示时长（毫秒），默认2000
 */
function showToast(message, duration = 2000) {
    // 移除已存在的 Toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // 创建 Toast 元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 定时移除
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/* ============================================================
   四、创建美食卡片 HTML（列表页和收藏页复用）
   ============================================================ */

/**
 * 根据店铺数据生成卡片 HTML 字符串
 * @param {Object} shop - 店铺数据对象
 * @param {boolean} showFavGroup - 是否显示收藏分组选择
 * @returns {string} - HTML 字符串
 */
function createShopCardHTML(shop, showFavGroup = false) {
    // 检查收藏状态
    const favStatus = checkFavorite(shop.id);
    const isFavorited = favStatus !== null;
    const favGroup = favStatus ? favStatus.group : '';

    // 构建标签 HTML
    const tagsHTML = shop.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    // 收藏按钮状态
    const favClass = isFavorited ? 'favorited' : '';
    const favTitle = isFavorited
        ? (favGroup === 'wantToGo' ? '已加入想去打卡' : '已标记吃完打卡')
        : '收藏';

    // 收藏分组提示标签
    let favGroupBadge = '';
    if (isFavorited && showFavGroup) {
        const badgeText = favGroup === 'wantToGo' ? '⭐ 想去' : '✅ 已吃';
        const badgeClass = favGroup === 'wantToGo' ? 'tag-district' : '';
        favGroupBadge = `<span class="tag ${badgeClass}">${badgeText}</span>`;
    }

    return `
        <div class="card shop-card" data-shop-id="${shop.id}" style="animation-delay: ${(shop.id % 5) * 0.1}s">
            <a href="detail.html?id=${shop.id}" class="shop-card-img-link">
                <div class="food-img-placeholder ${shop.thumbnail}">
                    <span>${shop.emoji}</span>
                </div>
            </a>
            <div class="shop-card-body">
                <div class="shop-card-header">
                    <a href="detail.html?id=${shop.id}" class="shop-card-name">${shop.name}</a>
                    <button class="btn-fav ${favClass}"
                            data-shop-id="${shop.id}"
                            data-fav-group="${favGroup}"
                            title="${favTitle}"
                            onclick="handleShopCardFav(event, ${shop.id})">
                        ${isFavorited ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="shop-card-meta">
                    <span class="shop-card-district tag tag-district">📍 ${shop.area}</span>
                    <span class="shop-card-price">💰 人均¥${shop.price}</span>
                    ${favGroupBadge}
                </div>
                <div class="shop-card-tags">
                    ${tagsHTML}
                </div>
                <p class="shop-card-intro">${shop.intro}</p>
            </div>
        </div>
    `;
}

/**
 * 处理店铺卡片上的收藏按钮点击
 * @param {Event} event - 点击事件
 * @param {number} shopId - 店铺ID
 */
function handleShopCardFav(event, shopId) {
    // 阻止事件冒泡，避免触发卡片跳转
    event.preventDefault();
    event.stopPropagation();

    const btn = event.currentTarget;
    const shop = getShopById(shopId);
    if (!shop) return;

    // 检查当前收藏状态
    const currentFav = checkFavorite(shopId);

    if (!currentFav) {
        // 未收藏 -> 加入「想去打卡」
        const added = toggleFavorite(shopId, 'wantToGo');
        if (added) {
            btn.classList.add('favorited');
            btn.dataset.favGroup = 'wantToGo';
            btn.innerHTML = '❤️';
            btn.title = '已加入想去打卡';
            showToast(`「${shop.name}」已加入想去打卡 ⭐`);
        }
    } else {
        // 已收藏 -> 取消收藏
        const removed = toggleFavorite(shopId, currentFav.group);
        if (!removed) {
            btn.classList.remove('favorited');
            btn.dataset.favGroup = '';
            btn.innerHTML = '🤍';
            btn.title = '收藏';
            showToast(`已取消收藏「${shop.name}」`);
        }
    }
}

/* ============================================================
   五、渲染筛选按钮组（列表页使用）
   ============================================================ */

/**
 * 在指定容器中生成区域筛选按钮
 * @param {string} containerSelector - 容器选择器
 * @param {Function} onFilterChange - 筛选变化回调函数
 */
function renderFilterButtons(containerSelector, onFilterChange) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const districts = getAllDistricts();

    // 生成「全部」按钮 + 各区域按钮
    let html = '<button class="filter-btn active" data-district="全部">🔥 全部美食</button>';
    districts.forEach(district => {
        html += `<button class="filter-btn" data-district="${district}">📍 ${district}区</button>`;
    });
    container.innerHTML = html;

    // 绑定点击事件
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // 切换激活状态
            container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 触发回调
            const district = btn.dataset.district;
            if (onFilterChange) {
                onFilterChange(district);
            }
        });
    });
}

/* ============================================================
   六、随机抽取盲盒（首页使用）
   ============================================================ */

/**
 * 随机抽取一家美食店铺
 * @returns {Object} 随机店铺数据对象
 */
function getRandomShop() {
    const randomIndex = Math.floor(Math.random() * foodShops.length);
    return foodShops[randomIndex];
}

/**
 * 显示盲盒推荐弹窗
 * @param {Object} shop - 要展示的店铺数据
 */
function showBlindBoxModal(shop) {
    // 移除已有弹窗
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    // 创建弹窗
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    overlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
            <div class="modal-food-img ${shop.thumbnail}">
                <span>${shop.emoji}</span>
            </div>
            <h2 style="color: var(--color-primary); margin-bottom: 8px;">🎉 今天去吃这家！</h2>
            <h3 style="font-size: 1.5rem; margin-bottom: 12px;">${shop.name}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 8px;">
                📍 ${shop.area} &nbsp;|&nbsp; 💰 人均¥${shop.price}
            </p>
            <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.9rem;">
                ${shop.intro}
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="detail.html?id=${shop.id}" class="btn btn-primary">📋 查看详情</a>
                <button class="btn btn-outline" onclick="quickAddToWantGo(${shop.id}, '${shop.name}')">⭐ 想去打卡</button>
                <button class="btn btn-outline btn-sm" onclick="document.querySelector('.modal-overlay').remove(); rerollBlindBox()">🎲 再抽一次</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // 点击遮罩关闭
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

/**
 * 快速添加到「想去打卡」并关闭弹窗
 * @param {number} shopId
 * @param {string} shopName
 */
function quickAddToWantGo(shopId, shopName) {
    const currentFav = checkFavorite(shopId);
    if (currentFav) {
        // 如果已收藏过，从旧分组移除再加入
        toggleFavorite(shopId, currentFav.group);
    }
    toggleFavorite(shopId, 'wantToGo');
    showToast(`「${shopName}」已加入想去打卡 ⭐`);
    // 关闭弹窗
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.remove();
}

/**
 * 重新抽取盲盒（关闭旧弹窗→开新弹窗）
 */
function rerollBlindBox() {
    const shop = getRandomShop();
    showBlindBoxModal(shop);
}
