/**
 * CyberQuiz UTS - Application Controller
 * Inspired by Dashboard_Mobile.png (Card list) & Dashboard_PC.png (Sidebar)
 */

window.App = (function () {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const state = {
    allQuestions: (typeof QUIZ_DATA !== 'undefined') ? QUIZ_DATA : [],
    // Navigation
    currentView: 'view-dashboard',
    // Quiz Player State
    quizQuestions: [],
    currentIndex: 0,
    userAnswers: {},
    quizConfig: {
      week: 'all',
      type: 'all',
      count: 10,
      feedback: 'exam'
    },
    // Search & Detail State
    searchQuery: '',
    detailQuiz: { week: 'all', type: 'all' },
    showDetailAnswers: true,
    isDarkMode: false
  };

  // ==========================================
  // DOM ELEMENTS
  // ==========================================
  const views = {
    dashboard: document.getElementById('view-dashboard'),
    quizDetails: document.getElementById('view-quiz-details'),
    quizSetup: document.getElementById('view-quiz-setup'),
    quizPlay: document.getElementById('view-quiz-play'),
    quizResult: document.getElementById('view-quiz-result')
  };

  // Sidebar & Nav Elements
  const appSidebar = document.getElementById('app-sidebar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navBankSoal = document.getElementById('nav-bank-soal');
  const navSimulasiQuiz = document.getElementById('nav-simulasi-quiz');
  const mNavBank = document.getElementById('m-nav-bank');
  const mNavQuiz = document.getElementById('m-nav-quiz');
  const mNavTheme = document.getElementById('m-nav-theme');

  // Search Inputs (Top bar for PC & Mobile bar for Mobile)
  const topSearchInput = document.getElementById('global-search-input');
  const btnTopClearSearch = document.getElementById('btn-top-clear-search');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const btnMobileClearSearch = document.getElementById('btn-mobile-clear-search');
  const searchLiveBanner = document.getElementById('search-live-banner');
  const searchResultsInfo = document.getElementById('search-results-info');
  const btnResetSearch = document.getElementById('btn-reset-search');
  const searchResultsContainer = document.getElementById('search-results-container');
  const searchCardsList = document.getElementById('search-cards-list');
  const dashboardCardsGrid = document.getElementById('dashboard-cards-grid');

  // Theme Toggles
  const topThemeToggle = document.getElementById('top-theme-toggle');
  const topThemeIcon = document.getElementById('top-theme-svg');
  const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
  const sidebarThemeIcon = document.getElementById('sidebar-theme-svg');
  const sidebarThemeLabel = document.getElementById('sidebar-theme-label');
  const mThemeIcon = document.getElementById('m-theme-svg');

  // Quiz Detail View Elements
  const btnBackToDashboard = document.getElementById('btn-back-to-dashboard');
  const detailQuizType = document.getElementById('detail-quiz-type');
  const detailQuizTitle = document.getElementById('detail-quiz-title');
  const detailQuizCount = document.getElementById('detail-quiz-count');
  const detailQuizGrade = document.getElementById('detail-quiz-grade');
  const btnToggleAnswersDetail = document.getElementById('btn-toggle-answers-detail');
  const btnQuizThisDetail = document.getElementById('btn-quiz-this-detail');
  const detailCardsList = document.getElementById('detail-cards-list');

  // Quiz Setup Form
  const quizForm = document.getElementById('quiz-config-form');
  const filterWeek = document.getElementById('filter-week');
  const filterType = document.getElementById('filter-type');
  const filterCount = document.getElementById('filter-count');
  const filterFeedback = document.getElementById('filter-feedback');

  // Quiz Play Elements
  const quizTopicTitle = document.getElementById('quiz-topic-title');
  const quizModeTag = document.getElementById('quiz-mode-tag');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const btnQuitQuiz = document.getElementById('btn-quit-quiz');
  const btnTogglePalette = document.getElementById('btn-toggle-palette');
  const btnClosePalette = document.getElementById('btn-close-palette');
  const questionPalette = document.getElementById('question-palette');
  const paletteGrid = document.getElementById('palette-grid');

  const qNumberBadge = document.getElementById('q-number-badge');
  const qPointBadge = document.getElementById('q-point-badge');
  const qWeekTag = document.getElementById('q-week-tag');
  const qTypeTag = document.getElementById('q-type-tag');
  const qSourceTag = document.getElementById('q-source-tag');
  const qText = document.getElementById('q-text');
  const qOptionsContainer = document.getElementById('q-options-container');
  const instantFeedback = document.getElementById('instant-feedback');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackDesc = document.getElementById('feedback-desc');

  const btnPrevQ = document.getElementById('btn-prev-q');
  const btnNextQ = document.getElementById('btn-next-q');
  const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
  const quizCounterText = document.getElementById('quiz-counter-text');

  // Quiz Results Elements
  const resultTitle = document.getElementById('result-title');
  const resultSubtitle = document.getElementById('result-subtitle');
  const resultScoreNum = document.getElementById('result-score-num');
  const resultScorePct = document.getElementById('result-score-pct');
  const rStatCorrect = document.getElementById('r-stat-correct');
  const rStatIncorrect = document.getElementById('r-stat-incorrect');
  const rStatTotal = document.getElementById('r-stat-total');
  const btnRetryQuiz = document.getElementById('btn-retry-quiz');
  const btnBackSetup = document.getElementById('btn-back-setup');
  const btnResultToDashboard = document.getElementById('btn-result-to-dashboard');
  const reviewListContainer = document.getElementById('review-list-container');

  // ==========================================
  // UTILITIES
  // ==========================================
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function highlightText(text, query) {
    if (!query || !text) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  // ==========================================
  // NAVIGATION & VIEW CONTROLLER
  // ==========================================
  function switchView(viewId) {
    state.currentView = viewId;

    // Toggle panels
    Object.values(views).forEach(panel => {
      if (panel) panel.classList.remove('active');
    });

    const activePanel = document.getElementById(viewId);
    if (activePanel) {
      activePanel.classList.add('active');
    }

    // Update active nav items (PC Sidebar & Mobile Bottom Bar)
    const isBank = (viewId === 'view-dashboard' || viewId === 'view-quiz-details');
    navBankSoal.classList.toggle('active', isBank);
    mNavBank.classList.toggle('active', isBank);

    const isQuiz = (viewId === 'view-quiz-setup' || viewId === 'view-quiz-play' || viewId === 'view-quiz-result');
    navSimulasiQuiz.classList.toggle('active', isQuiz);
    mNavQuiz.classList.toggle('active', isQuiz);

    // Close mobile drawer if open
    if (appSidebar) appSidebar.classList.remove('open');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // SEARCH IMPLEMENTATION
  // ==========================================
  function handleSearch(query) {
    state.searchQuery = query.trim().toLowerCase();

    // Sync input fields
    if (topSearchInput.value !== query) topSearchInput.value = query;
    if (mobileSearchInput.value !== query) mobileSearchInput.value = query;

    btnTopClearSearch.classList.toggle('hidden', !state.searchQuery);
    btnMobileClearSearch.classList.toggle('hidden', !state.searchQuery);

    if (!state.searchQuery) {
      searchLiveBanner.classList.add('hidden');
      searchResultsContainer.classList.add('hidden');
      dashboardCardsGrid.classList.remove('hidden');
      return;
    }

    // Make sure we are on dashboard view
    if (state.currentView !== 'view-dashboard') {
      switchView('view-dashboard');
    }

    // Filter matching questions
    const qTerm = state.searchQuery;
    const matches = state.allQuestions.filter(q => {
      const matchQ = q.question.toLowerCase().includes(qTerm);
      const matchAns = q.correct_answer.toLowerCase().includes(qTerm);
      const matchOpts = Object.values(q.options).some(o => o.toLowerCase().includes(qTerm));
      const matchWeek = q.week.toLowerCase().includes(qTerm);
      const matchType = q.type.toLowerCase().includes(qTerm);
      return matchQ || matchAns || matchOpts || matchWeek || matchType;
    });

    // Render search results
    searchLiveBanner.classList.remove('hidden');
    searchResultsContainer.classList.remove('hidden');
    dashboardCardsGrid.classList.add('hidden');

    searchResultsInfo.textContent = `Menemukan ${matches.length} soal untuk "${query}"`;
    searchCardsList.innerHTML = '';

    if (matches.length === 0) {
      searchCardsList.innerHTML = `
        <div class="q-detail-card" style="text-align:center; padding: 2.5rem 1rem;">
          <svg style="margin: 0 auto 0.75rem; display:block; color:var(--text-muted);" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>Tidak ada soal yang cocok dengan "${escapeHtml(query)}"</h3>
          <p style="color:var(--text-muted); font-size:0.9rem;">Coba gunakan kata kunci lain seperti: salt, biometric, ECB, ASVS, hash.</p>
        </div>
      `;
      return;
    }

    matches.forEach(q => {
      const card = renderQuestionDetailCard(q, qTerm, true);
      searchCardsList.appendChild(card);
    });
  }

  function clearSearch() {
    state.searchQuery = '';
    topSearchInput.value = '';
    mobileSearchInput.value = '';
    btnTopClearSearch.classList.add('hidden');
    btnMobileClearSearch.classList.add('hidden');
    searchLiveBanner.classList.add('hidden');
    searchResultsContainer.classList.add('hidden');
    dashboardCardsGrid.classList.remove('hidden');
  }

  // ==========================================
  // QUIZ DETAILS (Card click in Dashboard)
  // ==========================================
  function openQuizDetails(week, type) {
    state.detailQuiz = { week, type };
    state.showDetailAnswers = true;

    const filtered = state.allQuestions.filter(q => {
      const matchWeek = (week === 'all') || (q.week === week);
      const matchType = (type === 'all') || (q.type === type);
      return matchWeek && matchType;
    });

    // Header info
    if (week === 'all') {
      detailQuizType.textContent = 'Super Master';
      detailQuizTitle.textContent = 'Semua Soal Lengkap (Week 2 - 6)';
      detailQuizCount.textContent = `${filtered.length} Soal Lengkap (Yoga + Kafi Unik)`;
    } else {
      detailQuizType.textContent = type;
      detailQuizTitle.textContent = `${week} - ${getWeekTopic(week)}`;
      detailQuizCount.textContent = `${filtered.length} Soal Tersedia`;
    }
    detailQuizGrade.textContent = 'Grade: 10.00 / 10.00 (100%)';

    // Render question list
    detailCardsList.innerHTML = '';
    filtered.forEach((q, idx) => {
      const card = renderQuestionDetailCard(q, '', state.showDetailAnswers, idx + 1);
      detailCardsList.appendChild(card);
    });

    btnToggleAnswersDetail.textContent = state.showDetailAnswers ? 'Sembunyikan Kunci' : 'Tampilkan Kunci';
    switchView('view-quiz-details');
  }

  function getWeekTopic(week) {
    const topics = {
      'Week 2': 'Authentication & Access Control',
      'Week 3': 'Cyber Law & Cybercrime Ethics',
      'Week 4': 'Secure Coding & Testing Practice',
      'Week 5': 'OWASP ASVS & Web Security',
      'Week 6': 'Cryptography, Cipher Modes & Hash'
    };
    return topics[week] || 'Keamanan Siber';
  }

  function renderQuestionDetailCard(q, query, showAnswer, itemNum) {
    const card = document.createElement('div');
    card.className = 'q-detail-card';

    const numLabel = itemNum ? `Soal #${itemNum}` : `ID #${q.id}`;
    const highlightedQ = highlightText(q.question, query);

    let optionsHtml = '';
    const sortedKeys = Object.keys(q.options).sort();
    sortedKeys.forEach(k => {
      const isCorrect = (k === q.correct_letter);
      const highlightedOpt = highlightText(q.options[k], query);
      const showCorrectStyle = showAnswer && isCorrect;

      optionsHtml += `
        <div class="q-detail-option ${showCorrectStyle ? 'is-correct' : ''}">
          <span class="q-opt-key">${k.toUpperCase()}.</span>
          <span class="q-opt-text">${highlightedOpt} ${showCorrectStyle ? '✓' : ''}</span>
        </div>
      `;
    });

    const highlightedAns = highlightText(`${q.correct_letter.toUpperCase()}. ${q.correct_answer}`, query);

    card.innerHTML = `
      <div class="q-detail-header">
        <div class="q-detail-badges">
          <span class="badge-chip week">${q.week}</span>
          <span class="badge-chip type">${q.type}</span>
          <span class="badge-chip source">${q.source}</span>
        </div>
        <span class="q-detail-num">${numLabel}</span>
      </div>
      <div class="q-detail-title">${highlightedQ}</div>
      <div class="q-detail-options">
        ${optionsHtml}
      </div>
      ${showAnswer ? `
        <div class="q-detail-answer-box">
          <strong>Kunci Jawaban:</strong> ${highlightedAns}
        </div>
      ` : ''}
    `;

    return card;
  }

  // ==========================================
  // QUIZ ENGINE (Simulasi Quiz Setup & Play)
  // ==========================================
  function quickStartQuiz(week, type) {
    startQuiz({
      week: week,
      type: type,
      count: 10,
      feedback: 'exam'
    });
  }

  function startQuiz(config) {
    state.quizConfig = config;

    let pool = state.allQuestions.filter(q => {
      const matchWeek = (config.week === 'all') || (q.week === config.week);
      const matchType = (config.type === 'all') || (q.type === config.type);
      return matchWeek && matchType;
    });

    if (pool.length === 0) {
      alert('Tidak ada soal yang cocok dengan filter yang dipilih.');
      return;
    }

    // Dynamic Fisher-Yates Shuffling on every attempt
    let shuffled = shuffleArray(pool);

    if (config.count !== 'all') {
      const limit = parseInt(config.count, 10);
      shuffled = shuffled.slice(0, Math.min(limit, shuffled.length));
    }

    state.quizQuestions = shuffled;
    state.currentIndex = 0;
    state.userAnswers = {};

    const weekLabel = (config.week === 'all') ? 'Semua Pertemuan (Week 2 - 6)' : config.week;
    const typeLabel = (config.type === 'all') ? 'Pre & Post Test' : config.type;
    quizTopicTitle.textContent = `${weekLabel} (${typeLabel})`;
    quizModeTag.textContent = `${state.quizQuestions.length} Soal Diacak • Mode ${config.feedback === 'instant' ? 'Latihan' : 'Ujian'}`;

    buildPaletteGrid();
    renderCurrentQuestion();
    switchView('view-quiz-play');
  }

  function buildPaletteGrid() {
    paletteGrid.innerHTML = '';
    state.quizQuestions.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.addEventListener('click', () => {
        goToQuestion(idx);
        questionPalette.classList.add('hidden');
      });
      paletteGrid.appendChild(btn);
    });
    updatePaletteState();
  }

  function updatePaletteState() {
    const buttons = paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.remove('current', 'answered');
      if (idx === state.currentIndex) {
        btn.classList.add('current');
      } else if (state.userAnswers[idx] !== undefined) {
        btn.classList.add('answered');
      }
    });
  }

  function renderCurrentQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    const total = state.quizQuestions.length;
    const curNum = state.currentIndex + 1;

    // Progress bar
    const pct = (curNum / total) * 100;
    quizProgressFill.style.width = `${pct}%`;

    // Metadata
    qNumberBadge.textContent = `QUESTION ${curNum}/${total}`;
    qPointBadge.textContent = '1 point';
    qWeekTag.textContent = q.week;
    qTypeTag.textContent = q.type;
    qSourceTag.textContent = `Sumber: ${q.source}`;
    quizCounterText.textContent = `${curNum} dari ${total}`;
    qText.textContent = q.question;

    // Options matching QuizUi.png
    qOptionsContainer.innerHTML = '';
    const selectedLetter = state.userAnswers[state.currentIndex];
    const isInstant = (state.quizConfig.feedback === 'instant');
    const isAnswered = (selectedLetter !== undefined);

    const sortedLetters = Object.keys(q.options).sort();
    sortedLetters.forEach(let => {
      const optText = q.options[let];
      const optItem = document.createElement('div');
      optItem.className = 'option-item';
      optItem.dataset.letter = let;

      if (selectedLetter === let) {
        optItem.classList.add('selected');
      }

      if (isInstant && isAnswered) {
        if (let === q.correct_letter) {
          optItem.classList.add('correct');
        } else if (selectedLetter === let && let !== q.correct_letter) {
          optItem.classList.add('wrong');
        }
      }

      optItem.innerHTML = `
        <div class="radio-circle">
          <div class="radio-circle-inner"></div>
        </div>
        <div class="option-content">
          <span class="option-key">${let.toUpperCase()}.</span>
          <span class="option-label">${escapeHtml(optText)}</span>
        </div>
      `;

      optItem.addEventListener('click', () => {
        selectOption(let);
      });

      qOptionsContainer.appendChild(optItem);
    });

    // Instant Feedback
    if (isInstant && isAnswered) {
      instantFeedback.classList.remove('hidden', 'correct', 'wrong');
      if (selectedLetter === q.correct_letter) {
        instantFeedback.classList.add('correct');
        feedbackIcon.textContent = '✓';
        feedbackTitle.textContent = 'Jawaban Tepat!';
        feedbackDesc.textContent = `Kunci: ${q.correct_letter.toUpperCase()}. ${q.correct_answer}`;
      } else {
        instantFeedback.classList.add('wrong');
        feedbackIcon.textContent = '✕';
        feedbackTitle.textContent = 'Jawaban Kurang Tepat';
        feedbackDesc.textContent = `Jawaban yang benar: ${q.correct_letter.toUpperCase()}. ${q.correct_answer}`;
      }
    } else {
      instantFeedback.classList.add('hidden');
    }

    // Nav buttons
    btnPrevQ.disabled = (state.currentIndex === 0);
    if (state.currentIndex === total - 1) {
      btnNextQ.classList.add('hidden');
      btnSubmitQuiz.classList.remove('hidden');
    } else {
      btnNextQ.classList.remove('hidden');
      btnSubmitQuiz.classList.add('hidden');
    }

    updatePaletteState();
  }

  function selectOption(letter) {
    state.userAnswers[state.currentIndex] = letter;
    renderCurrentQuestion();
  }

  function goToQuestion(index) {
    if (index >= 0 && index < state.quizQuestions.length) {
      state.currentIndex = index;
      renderCurrentQuestion();
    }
  }

  function submitQuiz() {
    const total = state.quizQuestions.length;
    const answeredCount = Object.keys(state.userAnswers).length;

    if (answeredCount < total) {
      const unanswered = total - answeredCount;
      if (!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin kumpulkan sekarang?`)) {
        return;
      }
    }

    let correctCount = 0;
    state.quizQuestions.forEach((q, idx) => {
      if (state.userAnswers[idx] === q.correct_letter) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / total) * 100);

    resultScoreNum.textContent = `${correctCount}/${total}`;
    resultScorePct.textContent = `${percent}%`;
    rStatCorrect.textContent = correctCount;
    rStatIncorrect.textContent = (total - correctCount);
    rStatTotal.textContent = total;

    if (percent >= 80) {
      resultTitle.textContent = 'Nilai Sempurna! Sangat Mantap!';
      resultSubtitle.textContent = 'Pemahaman materi keamanan siber kamu sudah sangat siap untuk UTS.';
    } else if (percent >= 60) {
      resultTitle.textContent = 'Kerja Bagus!';
      resultSubtitle.textContent = 'Hasil kamu sudah baik. Cek pembahasan di bawah untuk memperbaiki bagian yang keliru.';
    } else {
      resultTitle.textContent = 'Terus Latihan!';
      resultSubtitle.textContent = 'Yuk pelajari kembali kunci jawaban di bawah untuk memperdalam konsep UTS.';
    }

    // Render Review List
    reviewListContainer.innerHTML = '';
    state.quizQuestions.forEach((q, idx) => {
      const userAns = state.userAnswers[idx];
      const isCorrect = (userAns === q.correct_letter);

      const reviewCard = document.createElement('div');
      reviewCard.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      const userAnsText = userAns 
        ? `${userAns.toUpperCase()}. ${q.options[userAns] || ''}` 
        : '(Tidak dijawab)';

      reviewCard.innerHTML = `
        <div class="review-meta">
          <span>Soal ${idx + 1} • ${q.week} (${q.type})</span>
          <span>${isCorrect ? 'Benar (+1.00)' : 'Salah (0.00)'}</span>
        </div>
        <div class="review-q-text">${escapeHtml(q.question)}</div>
        <div class="review-answers-box">
          <div class="review-line ${isCorrect ? 'correct-ans' : 'user-wrong'}">
            <strong>Jawaban Kamu:</strong> ${escapeHtml(userAnsText)}
          </div>
          ${!isCorrect ? `
            <div class="review-line correct-ans">
              <strong>Kunci Jawaban:</strong> ${q.correct_letter.toUpperCase()}. ${escapeHtml(q.correct_answer)}
            </div>
          ` : ''}
        </div>
      `;
      reviewListContainer.appendChild(reviewCard);
    });

    switchView('view-quiz-result');
  }

  // ==========================================
  // THEME MANAGEMENT
  // ==========================================
  const SUN_SVG_PATH = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  const MOON_SVG_PATH = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;

  function setTheme(isDark) {
    state.isDarkMode = isDark;
    const svgPath = isDark ? SUN_SVG_PATH : MOON_SVG_PATH;
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      sidebarThemeLabel.textContent = 'Mode Terang';
      localStorage.setItem('cyberquiz_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      sidebarThemeLabel.textContent = 'Mode Gelap';
      localStorage.setItem('cyberquiz_theme', 'light');
    }
    if (topThemeIcon) topThemeIcon.innerHTML = svgPath;
    if (sidebarThemeIcon) sidebarThemeIcon.innerHTML = svgPath;
    if (mThemeIcon) mThemeIcon.innerHTML = svgPath;
  }

  // ==========================================
  // EVENT BINDINGS
  // ==========================================
  function initEvents() {
    // Nav items click
    navBankSoal.addEventListener('click', () => switchView('view-dashboard'));
    navSimulasiQuiz.addEventListener('click', () => switchView('view-quiz-setup'));
    mNavBank.addEventListener('click', () => switchView('view-dashboard'));
    mNavQuiz.addEventListener('click', () => switchView('view-quiz-setup'));

    // Mobile sidebar toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        appSidebar.classList.toggle('open');
      });
    }

    // Search input events (Both PC Topbar and Mobile Searchbar)
    topSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    btnTopClearSearch.addEventListener('click', clearSearch);
    btnMobileClearSearch.addEventListener('click', clearSearch);
    btnResetSearch.addEventListener('click', clearSearch);

    // Theme toggles
    topThemeToggle.addEventListener('click', () => setTheme(!state.isDarkMode));
    sidebarThemeToggle.addEventListener('click', () => setTheme(!state.isDarkMode));
    mNavTheme.addEventListener('click', () => setTheme(!state.isDarkMode));

    // Detail View Actions
    btnBackToDashboard.addEventListener('click', () => switchView('view-dashboard'));
    btnToggleAnswersDetail.addEventListener('click', () => {
      state.showDetailAnswers = !state.showDetailAnswers;
      openQuizDetails(state.detailQuiz.week, state.detailQuiz.type);
    });
    btnQuizThisDetail.addEventListener('click', () => {
      quickStartQuiz(state.detailQuiz.week, state.detailQuiz.type);
    });

    // Quiz Setup Form Submit
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      startQuiz({
        week: filterWeek.value,
        type: filterType.value,
        count: filterCount.value,
        feedback: filterFeedback.value
      });
    });

    // Quiz Play Actions
    btnPrevQ.addEventListener('click', () => {
      if (state.currentIndex > 0) goToQuestion(state.currentIndex - 1);
    });
    btnNextQ.addEventListener('click', () => {
      if (state.currentIndex < state.quizQuestions.length - 1) goToQuestion(state.currentIndex + 1);
    });
    btnSubmitQuiz.addEventListener('click', submitQuiz);

    btnQuitQuiz.addEventListener('click', () => {
      if (confirm('Yakin ingin membatalkan kuis dan kembali ke menu?')) {
        switchView('view-quiz-setup');
      }
    });

    btnTogglePalette.addEventListener('click', () => {
      questionPalette.classList.toggle('hidden');
    });
    btnClosePalette.addEventListener('click', () => {
      questionPalette.classList.add('hidden');
    });

    // Result Actions
    btnRetryQuiz.addEventListener('click', () => {
      startQuiz(state.quizConfig);
    });
    btnBackSetup.addEventListener('click', () => switchView('view-quiz-setup'));
    btnResultToDashboard.addEventListener('click', () => switchView('view-dashboard'));

    // Keyboard Shortcuts (A-E to answer, Left/Right arrow to navigate)
    document.addEventListener('keydown', (e) => {
      if (state.currentView !== 'view-quiz-play') return;
      const key = e.key.toLowerCase();
      if (['a', 'b', 'c', 'd', 'e'].includes(key)) {
        selectOption(key);
      } else if (e.key === 'ArrowRight' && state.currentIndex < state.quizQuestions.length - 1) {
        goToQuestion(state.currentIndex + 1);
      } else if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
        goToQuestion(state.currentIndex - 1);
      }
    });
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    initEvents();

    const savedTheme = localStorage.getItem('cyberquiz_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme(true);
    } else {
      setTheme(false);
    }

    switchView('view-dashboard');
  }

  return {
    init,
    openQuizDetails,
    quickStartQuiz,
    switchView
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});
