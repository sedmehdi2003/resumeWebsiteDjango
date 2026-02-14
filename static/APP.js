const PHONE_COUNTRIES = [
  { country: 'IR', flag: '🇮🇷', code: '+98', name: 'Iran', length: 10 },
  { country: 'TR', flag: '🇹🇷', code: '+90', name: 'Turkey', length: 10 },
  { country: 'AE', flag: '🇦🇪', code: '+971', name: 'UAE', length: 9 },
  { country: 'SA', flag: '🇸🇦', code: '+966', name: 'Saudi Arabia', length: 9 },
  { country: 'IN', flag: '🇮🇳', code: '+91', name: 'India', length: 10 },
  { country: 'PK', flag: '🇵🇰', code: '+92', name: 'Pakistan', length: 10 },
  { country: 'CN', flag: '🇨🇳', code: '+86', name: 'China', length: 11 },
  { country: 'JP', flag: '🇯🇵', code: '+81', name: 'Japan', length: 10 },
  { country: 'KR', flag: '🇰🇷', code: '+82', name: 'South Korea', length: 10 },
  { country: 'ID', flag: '🇮🇩', code: '+62', name: 'Indonesia', length: 10 },
  { country: 'TH', flag: '🇹🇭', code: '+66', name: 'Thailand', length: 9 },
  { country: 'MY', flag: '🇲🇾', code: '+60', name: 'Malaysia', length: 9 },
  { country: 'SG', flag: '🇸🇬', code: '+65', name: 'Singapore', length: 8 },
  { country: 'AU', flag: '🇦🇺', code: '+61', name: 'Australia', length: 9 },
  { country: 'NZ', flag: '🇳🇿', code: '+64', name: 'New Zealand', length: 9 },
  { country: 'US', flag: '🇺🇸', code: '+1', name: 'United States', length: 10 },
  { country: 'CA', flag: '🇨🇦', code: '+1', name: 'Canada', length: 10 },
  { country: 'MX', flag: '🇲🇽', code: '+52', name: 'Mexico', length: 10 },
  { country: 'BR', flag: '🇧🇷', code: '+55', name: 'Brazil', length: 11 },
  { country: 'AR', flag: '🇦🇷', code: '+54', name: 'Argentina', length: 10 },
  { country: 'CL', flag: '🇨🇱', code: '+56', name: 'Chile', length: 9 },
  { country: 'GB', flag: '🇬🇧', code: '+44', name: 'United Kingdom', length: 10 },
  { country: 'DE', flag: '🇩🇪', code: '+49', name: 'Germany', length: 10 },
  { country: 'FR', flag: '🇫🇷', code: '+33', name: 'France', length: 9 },
  { country: 'IT', flag: '🇮🇹', code: '+39', name: 'Italy', length: 10 },
  { country: 'ES', flag: '🇪🇸', code: '+34', name: 'Spain', length: 9 },
  { country: 'NL', flag: '🇳🇱', code: '+31', name: 'Netherlands', length: 9 },
  { country: 'SE', flag: '🇸🇪', code: '+46', name: 'Sweden', length: 9 },
  { country: 'NO', flag: '🇳🇴', code: '+47', name: 'Norway', length: 8 },
  { country: 'CH', flag: '🇨🇭', code: '+41', name: 'Switzerland', length: 9 },
  { country: 'PL', flag: '🇵🇱', code: '+48', name: 'Poland', length: 9 },
  { country: 'ZA', flag: '🇿🇦', code: '+27', name: 'South Africa', length: 9 },
  { country: 'EG', flag: '🇪🇬', code: '+20', name: 'Egypt', length: 10 },
  { country: 'MA', flag: '🇲🇦', code: '+212', name: 'Morocco', length: 9 },
  { country: 'NG', flag: '🇳🇬', code: '+234', name: 'Nigeria', length: 10 },
  { country: 'KE', flag: '🇰🇪', code: '+254', name: 'Kenya', length: 9 },
  { country: 'AF', flag: '🇦🇫', code: '+93', name: 'Afghanistan', length: 9 },
  { country: 'IQ', flag: '🇮🇶', code: '+964', name: 'Iraq', length: 10 },
  { country: 'SY', flag: '🇸🇾', code: '+963', name: 'Syria', length: 9 },
  { country: 'JO', flag: '🇯🇴', code: '+962', name: 'Jordan', length: 9 },
  { country: 'LB', flag: '🇱🇧', code: '+961', name: 'Lebanon', length: 8 },
  { country: 'QA', flag: '🇶🇦', code: '+974', name: 'Qatar', length: 8 },
  { country: 'KW', flag: '🇰🇼', code: '+965', name: 'Kuwait', length: 8 },
  { country: 'OM', flag: '🇴🇲', code: '+968', name: 'Oman', length: 8 },
  { country: 'BH', flag: '🇧🇭', code: '+973', name: 'Bahrain', length: 8 },
  { country: 'RU', flag: '🇷🇺', code: '+7', name: 'Russia', length: 10 },
  { country: 'UA', flag: '🇺🇦', code: '+380', name: 'Ukraine', length: 9 },
  { country: 'RO', flag: '🇷🇴', code: '+40', name: 'Romania', length: 9 },
  { country: 'GR', flag: '🇬🇷', code: '+30', name: 'Greece', length: 10 },
  { country: 'PT', flag: '🇵🇹', code: '+351', name: 'Portugal', length: 9 },
  { country: 'BE', flag: '🇧🇪', code: '+32', name: 'Belgium', length: 9 },
  { country: 'AT', flag: '🇦🇹', code: '+43', name: 'Austria', length: 10 },
  { country: 'DK', flag: '🇩🇰', code: '+45', name: 'Denmark', length: 8 },
  { country: 'FI', flag: '🇫🇮', code: '+358', name: 'Finland', length: 9 },
  { country: 'IE', flag: '🇮🇪', code: '+353', name: 'Ireland', length: 9 },
  { country: 'CZ', flag: '🇨🇿', code: '+420', name: 'Czechia', length: 9 },
  { country: 'HU', flag: '🇭🇺', code: '+36', name: 'Hungary', length: 9 },
  { country: 'BG', flag: '🇧🇬', code: '+359', name: 'Bulgaria', length: 9 },
  { country: 'CO', flag: '🇨🇴', code: '+57', name: 'Colombia', length: 10 },
  { country: 'PE', flag: '🇵🇪', code: '+51', name: 'Peru', length: 9 },
  { country: 'VE', flag: '🇻🇪', code: '+58', name: 'Venezuela', length: 10 },
  { country: 'UY', flag: '🇺🇾', code: '+598', name: 'Uruguay', length: 8 },
  { country: 'BO', flag: '🇧🇴', code: '+591', name: 'Bolivia', length: 8 },
  { country: 'EC', flag: '🇪🇨', code: '+593', name: 'Ecuador', length: 9 },
  { country: 'VN', flag: '🇻🇳', code: '+84', name: 'Vietnam', length: 9 },
  { country: 'PH', flag: '🇵🇭', code: '+63', name: 'Philippines', length: 10 },
  { country: 'BD', flag: '🇧🇩', code: '+880', name: 'Bangladesh', length: 10 },
  { country: 'LK', flag: '🇱🇰', code: '+94', name: 'Sri Lanka', length: 9 },
  { country: 'NP', flag: '🇳🇵', code: '+977', name: 'Nepal', length: 10 },
  { country: 'ET', flag: '🇪🇹', code: '+251', name: 'Ethiopia', length: 9 },
  { country: 'TZ', flag: '🇹🇿', code: '+255', name: 'Tanzania', length: 9 },
  { country: 'GH', flag: '🇬🇭', code: '+233', name: 'Ghana', length: 9 },
  { country: 'DZ', flag: '🇩🇿', code: '+213', name: 'Algeria', length: 9 },
  { country: 'TN', flag: '🇹🇳', code: '+216', name: 'Tunisia', length: 8 },
  { country: 'CM', flag: '🇨🇲', code: '+237', name: 'Cameroon', length: 9 },
];

const SORTED_PHONE_COUNTRIES = [...PHONE_COUNTRIES].sort((a, b) => Number(a.code.slice(1)) - Number(b.code.slice(1)));
const DEFAULT_COUNTRY = PHONE_COUNTRIES.find(item => item.country === 'IR') || SORTED_PHONE_COUNTRIES[0];

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-locked');

  const gate = document.getElementById('welcomeGate');
  const optionButtons = document.querySelectorAll('.welcome-option');
  const reveals = document.querySelectorAll('.reveal');
  const entryItems = document.querySelectorAll('.hero, section, footer');

  const orderForm = document.getElementById('orderForm');
  const formMessage = document.getElementById('orderFormMessage');
  const orderCountryBtn = document.getElementById('countrySelectBtn');
  const orderCountryText = document.getElementById('countrySelectText');
  const orderCountryList = document.getElementById('countryList');
  const orderPhoneInput = document.getElementById('customerPhone');
  const orderCountryCodeInput = document.getElementById('customerCountryCode');

  const accountTrigger = document.getElementById('accountTrigger');
  const accountMenu = document.getElementById('accountMenu');
  const accountMenuOptions = document.querySelectorAll('.account-menu-option');
  const authOverlay = document.getElementById('authOverlay');
  const authClose = document.getElementById('authClose');

  const loginPanel = document.getElementById('loginPanel');
  const loginForm = document.getElementById('loginForm');
  const loginUsernameWrap = document.getElementById('loginUsernameWrap');
  const loginPhoneWrap = document.getElementById('loginPhoneWrap');
  const loginUsername = document.getElementById('loginUsername');
  const loginPasswordWrap = document.getElementById('loginPasswordWrap');
  const loginPassword = document.getElementById('loginPassword');
  const loginModeToggle = document.getElementById('loginModeToggle');
  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  const loginCountryBtn = document.getElementById('loginCountryBtn');
  const loginCountryText = document.getElementById('loginCountryText');
  const loginCountryList = document.getElementById('loginCountryList');
  const loginPhoneInput = document.getElementById('loginPhone');
  const loginCountryCodeInput = document.getElementById('loginCountryCode');
  const loginCodeWrap = document.getElementById('loginCodeWrap');
  const loginOtpCode = document.getElementById('loginOtpCode');
  const loginResendCodeBtn = document.getElementById('loginResendCode');
  const loginResendTimer = document.getElementById('loginResendTimer');
  const loginBackToPhoneBtn = document.getElementById('loginBackToPhone');
  const loginFormMessage = document.getElementById('loginFormMessage');

  const registerPanel = document.getElementById('registerPanel');
  const registerForm = document.getElementById('registerForm');
  const registerCountryBtn = document.getElementById('registerCountryBtn');
  const registerCountryText = document.getElementById('registerCountryText');
  const registerCountryList = document.getElementById('registerCountryList');
  const registerPhoneInput = document.getElementById('registerPhone');
  const registerCountryCodeInput = document.getElementById('registerCountryCode');
  const registerPassword = document.getElementById('registerPassword');
  const registerRepeatPassword = document.getElementById('registerRepeatPassword');

  let selectedOrderCountry = DEFAULT_COUNTRY;
  let selectedLoginCountry = DEFAULT_COUNTRY;
  let selectedRegisterCountry = DEFAULT_COUNTRY;
  let didEnter = false;
  const countryJumpState = {
    order: { key: '', index: -1 },
    login: { key: '', index: -1 },
    register: { key: '', index: -1 },
  };
  let loginUsesPhone = false;
  let loginPhoneCodeStep = false;
  let loginResendSecondsLeft = 60;
  let loginResendIntervalId = null;

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  function buildCountryOptions(listElement) {
    listElement.innerHTML = '';
    SORTED_PHONE_COUNTRIES.forEach(item => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'country-option';
      button.dataset.country = item.country;
      button.dataset.flag = item.flag;
      button.dataset.code = item.code;
      button.dataset.name = item.name;
      button.dataset.length = String(item.length);
      button.textContent = `${item.flag} ${item.code} ${item.name}`;
      li.appendChild(button);
      listElement.appendChild(li);
    });
  }

  function getCountryDataFromOption(optionElement) {
    return {
      country: optionElement.dataset.country || '',
      flag: optionElement.dataset.flag || '',
      code: optionElement.dataset.code || '',
      name: optionElement.dataset.name || '',
      length: Number(optionElement.dataset.length || 10),
    };
  }

  function sanitizePhoneInput(inputElement, maxLength) {
    const normalized = inputElement.value.replace(/\D/g, '').slice(0, maxLength);
    if (inputElement.value !== normalized) {
      inputElement.value = normalized;
    }
  }

  function applyCountryToInput(countryData, textElement, codeElement, inputElement, validateFn) {
    textElement.textContent = `${countryData.flag} ${countryData.code} ${countryData.name}`;
    codeElement.value = countryData.code;
    inputElement.maxLength = countryData.length;
    inputElement.placeholder = `${countryData.length} digits`;
    validateFn();
  }

  function resetCountryJumpState(listKey) {
    countryJumpState[listKey].key = '';
    countryJumpState[listKey].index = -1;
  }

  function closeOrderCountryList() {
    orderCountryList.hidden = true;
    orderCountryBtn.setAttribute('aria-expanded', 'false');
    resetCountryJumpState('order');
  }

  function closeLoginCountryList() {
    loginCountryList.hidden = true;
    loginCountryBtn.setAttribute('aria-expanded', 'false');
    resetCountryJumpState('login');
  }

  function closeRegisterCountryList() {
    registerCountryList.hidden = true;
    registerCountryBtn.setAttribute('aria-expanded', 'false');
    resetCountryJumpState('register');
  }

  function closeOtherCountryLists(except) {
    if (except !== 'order') closeOrderCountryList();
    if (except !== 'login') closeLoginCountryList();
    if (except !== 'register') closeRegisterCountryList();
  }

  function toggleCountryList(listElement, buttonElement, keyName) {
    const isOpen = !listElement.hidden;
    closeOtherCountryLists(keyName);
    listElement.hidden = isOpen;
    buttonElement.setAttribute('aria-expanded', String(!isOpen));
  }

  function setOrderCountry(countryData) {
    selectedOrderCountry = countryData;
    applyCountryToInput(
      countryData,
      orderCountryText,
      orderCountryCodeInput,
      orderPhoneInput,
      validateOrderPhone
    );
  }

  function isOrderPhoneValid() {
    const pattern = new RegExp(`^\\d{${selectedOrderCountry.length}}$`);
    return pattern.test(orderPhoneInput.value);
  }

  function validateOrderPhone() {
    sanitizePhoneInput(orderPhoneInput, selectedOrderCountry.length);
    if (orderPhoneInput.value.length > 0 && !isOrderPhoneValid()) {
      orderPhoneInput.setCustomValidity(
        `Enter ${selectedOrderCountry.length} digits for ${selectedOrderCountry.name} (${selectedOrderCountry.code}).`
      );
    } else {
      orderPhoneInput.setCustomValidity('');
    }
  }

  function selectOrderCountryOption(optionElement) {
    setOrderCountry(getCountryDataFromOption(optionElement));
    closeOrderCountryList();
  }

  function getCountryListByKey(listKey) {
    if (listKey === 'order') return orderCountryList;
    if (listKey === 'login') return loginCountryList;
    return registerCountryList;
  }

  function getCountryOptions(listElement) {
    return Array.from(listElement.querySelectorAll('.country-option'));
  }

  function getSelectedCountryByKey(listKey) {
    if (listKey === 'order') return selectedOrderCountry;
    if (listKey === 'login') return selectedLoginCountry;
    return selectedRegisterCountry;
  }

  function focusCountryOptionByIndex(listElement, index) {
    const options = getCountryOptions(listElement);
    if (options.length === 0) return;
    const normalizedIndex = ((index % options.length) + options.length) % options.length;
    const target = options[normalizedIndex];
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'nearest' });
  }

  function getFocusedCountryIndex(listElement) {
    const focused = document.activeElement;
    return getCountryOptions(listElement).findIndex(option => option === focused);
  }

  function getSelectedCountryIndex(listKey) {
    const listElement = getCountryListByKey(listKey);
    const selectedCountry = getSelectedCountryByKey(listKey);
    return getCountryOptions(listElement).findIndex(option => (option.dataset.country || '') === selectedCountry.country);
  }

  function jumpToCountryByFirstWord(letterKey, listKey) {
    const listElement = getCountryListByKey(listKey);
    const normalized = letterKey.toLowerCase();
    const state = countryJumpState[listKey];
    const options = getCountryOptions(listElement);

    const matches = options
      .filter(option => {
        const countryName = (option.dataset.name || '').trim();
        const firstWord = countryName.split(' ')[0] || '';
        return firstWord.toLowerCase().startsWith(normalized);
      })
      .sort((a, b) => (a.dataset.name || '').localeCompare(b.dataset.name || ''));

    if (matches.length === 0) return;

    if (state.key !== normalized) {
      state.key = normalized;
      state.index = 0;
    } else {
      state.index = (state.index + 1) % matches.length;
    }

    const target = matches[state.index];
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'nearest' });
  }

  function getOpenCountryListKey() {
    if (!orderCountryList.hidden) return 'order';
    if (!loginCountryList.hidden) return 'login';
    if (!registerCountryList.hidden) return 'register';
    return '';
  }

  function selectCountryOptionByListKey(listKey, optionElement) {
    if (listKey === 'order') {
      selectOrderCountryOption(optionElement);
      return;
    }

    if (listKey === 'login') {
      selectLoginCountryOption(optionElement);
      return;
    }

    selectRegisterCountryOption(optionElement);
  }

  function setLoginCountry(countryData) {
    selectedLoginCountry = countryData;
    applyCountryToInput(
      countryData,
      loginCountryText,
      loginCountryCodeInput,
      loginPhoneInput,
      validateLoginPhone
    );
  }

  function isLoginPhoneValid() {
    const pattern = new RegExp(`^\\d{${selectedLoginCountry.length}}$`);
    return pattern.test(loginPhoneInput.value);
  }

  function validateLoginPhone() {
    sanitizePhoneInput(loginPhoneInput, selectedLoginCountry.length);
    if (loginUsesPhone && loginPhoneInput.value.length > 0 && !isLoginPhoneValid()) {
      loginPhoneInput.setCustomValidity(
        `Enter ${selectedLoginCountry.length} digits for ${selectedLoginCountry.name} (${selectedLoginCountry.code}).`
      );
    } else {
      loginPhoneInput.setCustomValidity('');
    }
  }

  function selectLoginCountryOption(optionElement) {
    setLoginCountry(getCountryDataFromOption(optionElement));
    closeLoginCountryList();
  }

  function setRegisterCountry(countryData) {
    selectedRegisterCountry = countryData;
    applyCountryToInput(
      countryData,
      registerCountryText,
      registerCountryCodeInput,
      registerPhoneInput,
      validateRegisterPhone
    );
  }

  function isRegisterPhoneValid() {
    const pattern = new RegExp(`^\\d{${selectedRegisterCountry.length}}$`);
    return pattern.test(registerPhoneInput.value);
  }

  function validateRegisterPhone() {
    sanitizePhoneInput(registerPhoneInput, selectedRegisterCountry.length);
    if (registerPhoneInput.value.length > 0 && !isRegisterPhoneValid()) {
      registerPhoneInput.setCustomValidity(
        `Enter ${selectedRegisterCountry.length} digits for ${selectedRegisterCountry.name} (${selectedRegisterCountry.code}).`
      );
    } else {
      registerPhoneInput.setCustomValidity('');
    }
  }

  function selectRegisterCountryOption(optionElement) {
    setRegisterCountry(getCountryDataFromOption(optionElement));
    closeRegisterCountryList();
  }

  function closeAccountMenu() {
    accountMenu.classList.remove('is-open');
    accountMenu.hidden = true;
    accountTrigger.setAttribute('aria-expanded', 'false');
  }

  function openAccountMenu() {
    accountMenu.hidden = false;
    accountMenu.classList.remove('is-open');
    void accountMenu.offsetWidth;
    accountMenu.classList.add('is-open');
    accountTrigger.setAttribute('aria-expanded', 'true');
  }

  function toggleAccountMenu() {
    if (accountMenu.hidden) {
      openAccountMenu();
      return;
    }
    closeAccountMenu();
  }

  function formatCountdown(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(remainingSeconds).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  function syncLoginResendState() {
    loginResendTimer.textContent = formatCountdown(loginResendSecondsLeft);
    loginResendCodeBtn.disabled = loginResendSecondsLeft > 0;
  }

  function stopLoginResendTimer() {
    if (loginResendIntervalId) {
      window.clearInterval(loginResendIntervalId);
      loginResendIntervalId = null;
    }
  }

  function startLoginResendTimer() {
    stopLoginResendTimer();
    loginResendSecondsLeft = 60;
    syncLoginResendState();

    loginResendIntervalId = window.setInterval(() => {
      loginResendSecondsLeft -= 1;
      if (loginResendSecondsLeft <= 0) {
        loginResendSecondsLeft = 0;
        syncLoginResendState();
        stopLoginResendTimer();
        return;
      }
      syncLoginResendState();
    }, 1000);
  }

  function sanitizeLoginOtpInput() {
    const normalized = loginOtpCode.value.replace(/\D/g, '').slice(0, 6);
    if (loginOtpCode.value !== normalized) {
      loginOtpCode.value = normalized;
    }
  }

  function isLoginOtpValid() {
    return /^\d{6}$/.test(loginOtpCode.value);
  }

  function validateLoginOtp() {
    sanitizeLoginOtpInput();
    if (loginPhoneCodeStep && loginOtpCode.value.length > 0 && !isLoginOtpValid()) {
      loginOtpCode.setCustomValidity('Enter the 6-digit code sent to your phone.');
    } else {
      loginOtpCode.setCustomValidity('');
    }
  }

  function resetLoginPhoneCodeStep() {
    loginPhoneCodeStep = false;
    loginCodeWrap.hidden = true;
    loginOtpCode.required = false;
    loginOtpCode.value = '';
    loginPhoneInput.readOnly = false;
    loginCountryBtn.disabled = false;
    loginSubmitBtn.textContent = loginUsesPhone ? 'Send code' : 'Login';
    loginFormMessage.textContent = '';
    loginFormMessage.classList.remove('success');
    validateLoginOtp();
    stopLoginResendTimer();
    loginResendSecondsLeft = 60;
    syncLoginResendState();
  }

  function enterLoginPhoneCodeStep() {
    loginPhoneCodeStep = true;
    closeLoginCountryList();
    loginCodeWrap.hidden = false;
    loginOtpCode.required = true;
    loginPhoneInput.readOnly = true;
    loginCountryBtn.disabled = true;
    loginSubmitBtn.textContent = 'Verify code';
    loginFormMessage.textContent = `Code sent to ${selectedLoginCountry.code} ${loginPhoneInput.value}.`;
    loginFormMessage.classList.add('success');
    loginOtpCode.focus();
    startLoginResendTimer();
  }

  function setLoginMode(usePhone) {
    loginUsesPhone = usePhone;
    loginUsernameWrap.hidden = usePhone;
    loginPhoneWrap.hidden = !usePhone;
    loginPasswordWrap.hidden = usePhone;
    loginUsername.required = !usePhone;
    loginPassword.required = !usePhone;
    loginPhoneInput.required = usePhone;
    loginModeToggle.textContent = usePhone ? 'Login with username' : 'Login with phone number';
    loginSubmitBtn.textContent = usePhone ? 'Send code' : 'Login';
    resetLoginPhoneCodeStep();
    validateLoginPhone();
  }

  function openAuthModal(mode) {
    closeAccountMenu();
    closeOtherCountryLists('');
    authOverlay.hidden = false;
    document.body.classList.add('auth-open');

    loginPanel.hidden = mode !== 'login';
    registerPanel.hidden = mode !== 'register';
    resetLoginPhoneCodeStep();
    loginFormMessage.classList.remove('success');

    if (mode === 'login') {
      loginForm.reset();
      setLoginCountry(DEFAULT_COUNTRY);
      setLoginMode(false);
    } else {
      registerForm.reset();
      setRegisterCountry(DEFAULT_COUNTRY);
      registerRepeatPassword.setCustomValidity('');
    }
  }

  function closeAuthModal() {
    authOverlay.hidden = true;
    document.body.classList.remove('auth-open');
    closeLoginCountryList();
    closeRegisterCountryList();
    resetLoginPhoneCodeStep();
    loginFormMessage.classList.remove('success');
  }

  function validateRepeatPassword() {
    if (registerRepeatPassword.value && registerRepeatPassword.value !== registerPassword.value) {
      registerRepeatPassword.setCustomValidity('Passwords do not match.');
    } else {
      registerRepeatPassword.setCustomValidity('');
    }
  }

  function playEnterAnimation() {
    if (didEnter) return;
    didEnter = true;

    entryItems.forEach((item, index) => {
      item.classList.add('enter-item');
      item.style.setProperty('--enter-delay', `${index * 85}ms`);
    });

    requestAnimationFrame(() => {
      document.body.classList.add('page-entering');
    });

    const totalDuration = 850 + (entryItems.length * 85);
    window.setTimeout(() => {
      document.body.classList.remove('page-entering');
      entryItems.forEach(item => {
        item.classList.remove('enter-item');
        item.style.removeProperty('--enter-delay');
      });
    }, totalDuration);
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  buildCountryOptions(orderCountryList);
  buildCountryOptions(loginCountryList);
  buildCountryOptions(registerCountryList);
  setOrderCountry(DEFAULT_COUNTRY);
  setLoginCountry(DEFAULT_COUNTRY);
  setRegisterCountry(DEFAULT_COUNTRY);
  setLoginMode(false);

  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.body.classList.remove('page-locked');
      gate.classList.add('hidden');
      playEnterAnimation();
    });
  });

  orderCountryBtn.addEventListener('click', event => {
    event.stopPropagation();
    toggleCountryList(orderCountryList, orderCountryBtn, 'order');
  });

  loginCountryBtn.addEventListener('click', event => {
    event.stopPropagation();
    toggleCountryList(loginCountryList, loginCountryBtn, 'login');
  });

  registerCountryBtn.addEventListener('click', event => {
    event.stopPropagation();
    toggleCountryList(registerCountryList, registerCountryBtn, 'register');
  });

  orderCountryList.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains('country-option')) return;
    selectOrderCountryOption(target);
  });

  loginCountryList.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains('country-option')) return;
    selectLoginCountryOption(target);
  });

  registerCountryList.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains('country-option')) return;
    selectRegisterCountryOption(target);
  });

  accountTrigger.addEventListener('click', event => {
    event.stopPropagation();
    toggleAccountMenu();
  });

  accountMenuOptions.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.auth === 'register' ? 'register' : 'login';
      openAuthModal(mode);
    });
  });

  authClose.addEventListener('click', closeAuthModal);

  authOverlay.addEventListener('click', event => {
    if (event.target === authOverlay) {
      closeAuthModal();
    }
  });

  loginModeToggle.addEventListener('click', () => {
    setLoginMode(!loginUsesPhone);
  });

  loginBackToPhoneBtn.addEventListener('click', () => {
    resetLoginPhoneCodeStep();
    loginPhoneInput.focus();
  });

  loginResendCodeBtn.addEventListener('click', () => {
    if (loginResendCodeBtn.disabled) return;
    startLoginResendTimer();
    loginFormMessage.textContent = `A new code was sent to ${selectedLoginCountry.code} ${loginPhoneInput.value}.`;
    loginFormMessage.classList.add('success');
  });

  document.addEventListener('click', event => {
    if (!(event.target instanceof Node)) return;

    if (!orderCountryList.contains(event.target) && !orderCountryBtn.contains(event.target)) {
      closeOrderCountryList();
    }

    if (!loginCountryList.contains(event.target) && !loginCountryBtn.contains(event.target)) {
      closeLoginCountryList();
    }

    if (!registerCountryList.contains(event.target) && !registerCountryBtn.contains(event.target)) {
      closeRegisterCountryList();
    }

    if (!accountMenu.contains(event.target) && !accountTrigger.contains(event.target)) {
      closeAccountMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeAuthModal();
      closeAccountMenu();
      closeOtherCountryLists('');
      return;
    }

    const openListKey = getOpenCountryListKey();
    if (!openListKey) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    const listElement = getCountryListByKey(openListKey);

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const currentIndex = getFocusedCountryIndex(listElement);
      const baseIndex = currentIndex === -1 ? getSelectedCountryIndex(openListKey) : currentIndex;
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      focusCountryOptionByIndex(listElement, baseIndex + delta);
      return;
    }

    if (event.key === 'Enter') {
      const focused = document.activeElement;
      if (
        focused instanceof HTMLElement &&
        focused.classList.contains('country-option') &&
        listElement.contains(focused)
      ) {
        event.preventDefault();
        selectCountryOptionByListKey(openListKey, focused);
      }
      return;
    }

    if (/^[a-zA-Z]$/.test(event.key)) {
      event.preventDefault();
      jumpToCountryByFirstWord(event.key, openListKey);
    }
  });

  orderPhoneInput.addEventListener('input', validateOrderPhone);
  loginPhoneInput.addEventListener('input', validateLoginPhone);
  loginOtpCode.addEventListener('input', validateLoginOtp);
  registerPhoneInput.addEventListener('input', validateRegisterPhone);
  registerPassword.addEventListener('input', validateRepeatPassword);
  registerRepeatPassword.addEventListener('input', validateRepeatPassword);

  orderForm.addEventListener('submit', event => {
    event.preventDefault();
    validateOrderPhone();

    if (!isOrderPhoneValid()) {
      orderPhoneInput.reportValidity();
      formMessage.textContent = 'Please enter a valid phone number for the selected country.';
      formMessage.classList.remove('success');
      return;
    }

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      formMessage.textContent = 'Please complete all required fields correctly.';
      formMessage.classList.remove('success');
      return;
    }

    formMessage.textContent = 'Order submitted successfully.';
    formMessage.classList.add('success');
    orderForm.reset();
    setOrderCountry(DEFAULT_COUNTRY);
  });

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    if (loginUsesPhone) {
      validateLoginPhone();

      if (!isLoginPhoneValid()) {
        loginPhoneInput.reportValidity();
        return;
      }

      if (!loginPhoneCodeStep) {
        if (!loginForm.checkValidity()) {
          loginForm.reportValidity();
          return;
        }
        enterLoginPhoneCodeStep();
        return;
      }

      validateLoginOtp();
      if (!isLoginOtpValid()) {
        loginOtpCode.reportValidity();
        return;
      }

      closeAuthModal();
      return;
    }

    if (!loginForm.checkValidity()) {
      loginForm.reportValidity();
      return;
    }

    closeAuthModal();
  });

  registerForm.addEventListener('submit', event => {
    event.preventDefault();
    validateRegisterPhone();
    validateRepeatPassword();

    if (!isRegisterPhoneValid()) {
      registerPhoneInput.reportValidity();
      return;
    }

    if (!registerForm.checkValidity()) {
      registerForm.reportValidity();
      return;
    }

    closeAuthModal();
  });

  document.querySelectorAll('.skill').forEach(skill => {
    const rating = parseFloat(skill.dataset.rating);
    const starsContainer = skill.querySelector('.stars');
    const ratingText = skill.querySelector('.rating-text');
    if (!starsContainer) return;

    starsContainer.innerHTML = '';
    for (let i = 1; i <= 5; i += 1) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.textContent = '★';

      if (rating >= i) {
        star.classList.add('filled');
      } else if (rating >= i - 0.5) {
        star.classList.add('half');
      }
      starsContainer.appendChild(star);
    }

    if (ratingText) {
      ratingText.textContent = `${rating} / 5`;
    }
  });
});
