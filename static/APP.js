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
const LANG_STORAGE_KEY = 'resume_lang';
const LANG_DEFAULT = 'en';
const RTL_LANGS = new Set(['fa']);
const I18N = {
  en: {
    'welcome.header': 'Language',
    'welcome.question': 'Please choose your language.',
    'welcome.persianOptionHtml': '<img class="flag-icon" src="https://flagcdn.com/24x18/ir.png" width="24" height="18" alt="Iran flag" /> Persian',
    'welcome.englishOptionHtml': '<img class="flag-icon" src="https://flagcdn.com/24x18/us.png" width="24" height="18" alt="US flag" /> English',
    'account.title': 'Account',
    'auth.loginTitle': 'Login',
    'auth.registerTitle': 'Register',
    'auth.loginWithPhone': 'Login with phone number',
    'auth.usernameLabel': 'Username',
    'auth.firstNameLabel': 'First name',
    'auth.lastNameLabel': 'Last name',
    'auth.phoneLabel': 'Phone number',
    'auth.emailRegisterLabel': 'Email register',
    'auth.passwordLabel': 'Password',
    'auth.repeatPasswordLabel': 'Repeat password',
    'auth.verificationCodeLabel': 'Verification code',
    'auth.resendCode': "I didn't receive code. Send it again.",
    'auth.useAnotherPhone': 'Use another phone number',
    'auth.passwordMismatch': 'Passwords do not match.',
    'hero.badge': 'Back-End Developer',
    'hero.titleHtml': "Hi, I'm <span>Amirmahdi</span>",
    'hero.description': 'I build modern, performant web applications with clean code and strong attention to detail. Passionate about backend systems and scalable architecture.',
    'profile.name': 'Amirmahdi Khalili',
    'profile.focusLabel': 'Focus:',
    'profile.focusValue': 'Backend Development',
    'profile.locationLabel': 'Location:',
    'profile.emailLabel': 'Email:',
    'profile.githubLabel': 'GitHub:',
    'sections.skills': 'Skills',
    'sections.experience': 'Experience',
    'sections.projects': 'Projects',
    'sections.orderProduct': 'Order Product',
    'experience.azadRole': 'Position: Designer',
    'experience.freelanceRole': 'Position: Developer',
    'projects.descriptionHtml': '<strong>Resume Website:</strong> A modern personal website.<br /><strong>Game Center Website:</strong> Gaming website for Reapers Game Center.<br /><strong>Telegram / Discord BOT:</strong> Many BOTs made.',
    'order.nameLabel': 'Name',
    'order.emailLabel': 'Email',
    'order.phoneLabel': 'Phone number',
    'order.productTitleLabel': 'Product Title',
    'order.productDescriptionLabel': 'Product description',
    'order.attachmentsLabel': 'Attachments (PDF, images, etc.)',
    'order.uploadHint': 'You can upload one or more files.',
    'order.submitButton': 'Send Order',
    'order.invalidPhone': 'Please enter a valid phone number for the selected country.',
    'order.invalidForm': 'Please complete all required fields correctly.',
    'order.success': 'Order submitted successfully.',
    'footer.copyright': '© 2026 Amirmahdi — Crafted with care',
    'login.otpValidation': 'Enter the 6-digit code sent to your phone.',
    'login.modeUsername': 'Login with username',
    'login.modePhone': 'Login with phone number',
    'login.sendCode': 'Send code',
    'login.verifyCode': 'Verify code',
    'login.codeSent': 'Code sent to {code} {phone}.',
    'login.newCodeSent': 'A new code was sent to {code} {phone}.',
    'login.enterOtpPlaceholder': 'Enter 6-digit code',
  },
  fa: {
    'welcome.header': 'زبان',
    'welcome.question': 'لطفا زبان خود را انتخاب کنید.',
    'welcome.persianOptionHtml': '<img class="flag-icon" src="https://flagcdn.com/24x18/ir.png" width="24" height="18" alt="Iran flag" /> فارسی',
    'welcome.englishOptionHtml': '<img class="flag-icon" src="https://flagcdn.com/24x18/us.png" width="24" height="18" alt="US flag" /> انگلیسی',
    'account.title': 'حساب کاربری',
    'auth.loginTitle': 'ورود',
    'auth.registerTitle': 'ثبت‌نام',
    'auth.loginWithPhone': 'ورود با شماره تلفن',
    'auth.usernameLabel': 'نام کاربری',
    'auth.firstNameLabel': 'نام',
    'auth.lastNameLabel': 'نام خانوادگی',
    'auth.phoneLabel': 'شماره تلفن',
    'auth.emailRegisterLabel': 'ایمیل ثبت‌نام',
    'auth.passwordLabel': 'رمز عبور',
    'auth.repeatPasswordLabel': 'تکرار رمز عبور',
    'auth.verificationCodeLabel': 'کد تایید',
    'auth.resendCode': 'کدی دریافت نکردم. ارسال مجدد.',
    'auth.useAnotherPhone': 'استفاده از شماره دیگر',
    'auth.passwordMismatch': 'رمز عبور و تکرار آن یکسان نیست.',
    'hero.badge': 'توسعه‌دهنده بک‌اند',
    'hero.titleHtml': 'سلام، من <span>امیرمهدی</span> هستم',
    'hero.description': 'من وب‌اپلیکیشن‌های مدرن و سریع با کدنویسی تمیز و توجه بالا به جزئیات می‌سازم. علاقه‌مند به سیستم‌های بک‌اند و معماری مقیاس‌پذیر.',
    'profile.name': 'امیرمهدی خلیلی',
    'profile.focusLabel': 'تمرکز:',
    'profile.focusValue': 'توسعه بک‌اند',
    'profile.locationLabel': 'موقعیت:',
    'profile.emailLabel': 'ایمیل:',
    'profile.githubLabel': 'گیت‌هاب:',
    'sections.skills': 'مهارت‌ها',
    'sections.experience': 'تجربه',
    'sections.projects': 'پروژه‌ها',
    'sections.orderProduct': 'سفارش پروژه',
    'experience.azadRole': 'سمت: طراح',
    'experience.freelanceRole': 'سمت: توسعه‌دهنده',
    'projects.descriptionHtml': '<strong>وب‌سایت رزومه:</strong> یک وب‌سایت شخصی مدرن.<br /><strong>وب‌سایت گیم‌سنتر:</strong> وب‌سایت مخصوص Reapers Game Center.<br /><strong>ربات تلگرام / دیسکورد:</strong> ساخت ربات‌های متعدد.',
    'order.nameLabel': 'نام',
    'order.emailLabel': 'ایمیل',
    'order.phoneLabel': 'شماره تلفن',
    'order.productTitleLabel': 'عنوان پروژه',
    'order.productDescriptionLabel': 'توضیحات پروژه',
    'order.attachmentsLabel': 'فایل‌های ضمیمه (PDF، تصویر و ...)',
    'order.uploadHint': 'می‌توانید یک یا چند فایل آپلود کنید.',
    'order.submitButton': 'ارسال سفارش',
    'order.invalidPhone': 'لطفا شماره تلفن معتبر برای کشور انتخاب‌شده وارد کنید.',
    'order.invalidForm': 'لطفا همه فیلدهای لازم را درست تکمیل کنید.',
    'order.success': 'سفارش با موفقیت ارسال شد.',
    'footer.copyright': '© 2026 امیرمهدی — ساخته شده با دقت',
    'login.otpValidation': 'کد ۶ رقمی ارسال‌شده به تلفن را وارد کنید.',
    'login.modeUsername': 'ورود با نام کاربری',
    'login.modePhone': 'ورود با شماره تلفن',
    'login.sendCode': 'ارسال کد',
    'login.verifyCode': 'تایید کد',
    'login.codeSent': 'کد برای {code} {phone} ارسال شد.',
    'login.newCodeSent': 'کد جدید برای {code} {phone} ارسال شد.',
    'login.enterOtpPlaceholder': 'کد ۶ رقمی را وارد کنید',
  },
};

function formatText(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) => (
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
  ));
}

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
  let currentLang = LANG_DEFAULT;

  const translateTextNodes = document.querySelectorAll('[data-i18n]');
  const translateHtmlNodes = document.querySelectorAll('[data-i18n-html]');

  function t(key) {
    const dictionary = I18N[currentLang] || I18N[LANG_DEFAULT];
    const fallback = I18N[LANG_DEFAULT];
    return dictionary[key] || fallback[key] || key;
  }

  function applyStaticTranslations() {
    translateTextNodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (!key) return;
      node.textContent = t(key);
    });

    translateHtmlNodes.forEach(node => {
      const key = node.getAttribute('data-i18n-html');
      if (!key) return;
      node.innerHTML = t(key);
    });
  }

  const COUNTRY_KEYS = ['order', 'login', 'register'];
  const selectedCountries = {
    order: DEFAULT_COUNTRY,
    login: DEFAULT_COUNTRY,
    register: DEFAULT_COUNTRY,
  };
  let didEnter = false;
  const countryJumpState = {
    order: { key: '', index: -1 },
    login: { key: '', index: -1 },
    register: { key: '', index: -1 },
  };
  const countryControls = {
    order: {
      button: orderCountryBtn,
      text: orderCountryText,
      list: orderCountryList,
      phoneInput: orderPhoneInput,
      codeInput: orderCountryCodeInput,
      enforce: () => true,
    },
    login: {
      button: loginCountryBtn,
      text: loginCountryText,
      list: loginCountryList,
      phoneInput: loginPhoneInput,
      codeInput: loginCountryCodeInput,
      enforce: () => loginUsesPhone,
    },
    register: {
      button: registerCountryBtn,
      text: registerCountryText,
      list: registerCountryList,
      phoneInput: registerPhoneInput,
      codeInput: registerCountryCodeInput,
      enforce: () => true,
    },
  };
  let loginUsesPhone = false;
  let loginPhoneCodeStep = false;
  let loginResendSecondsLeft = 60;
  let loginResendIntervalId = null;

  function applyLanguage(langCode) {
    const normalized = Object.prototype.hasOwnProperty.call(I18N, langCode) ? langCode : LANG_DEFAULT;
    currentLang = normalized;
    window.localStorage.setItem(LANG_STORAGE_KEY, normalized);

    document.documentElement.lang = normalized;
    document.documentElement.dir = RTL_LANGS.has(normalized) ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-fa', normalized === 'fa');

    applyStaticTranslations();
    syncLanguageDependentText();
  }

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

  function getFlagIconMarkup(countryCode, countryName) {
    if (!countryCode) return '';
    const lowerCode = countryCode.toLowerCase();
    return `<img class="flag-icon" src="https://flagcdn.com/24x18/${lowerCode}.png" width="24" height="18" alt="${countryName} flag" />`;
  }

  function applyCountryToInput(countryData, textElement, codeElement, inputElement, validateFn) {
    textElement.innerHTML = `${getFlagIconMarkup(countryData.country, countryData.name)} ${countryData.code} ${countryData.name}`;
    codeElement.value = countryData.code;
    inputElement.maxLength = countryData.length;
    inputElement.placeholder = `${countryData.length} digits`;
    validateFn();
  }

  function resetCountryJumpState(listKey) {
    countryJumpState[listKey].key = '';
    countryJumpState[listKey].index = -1;
  }

  function closeCountryList(listKey) {
    const control = countryControls[listKey];
    control.list.hidden = true;
    control.button.setAttribute('aria-expanded', 'false');
    resetCountryJumpState(listKey);
  }

  function closeOtherCountryLists(except) {
    COUNTRY_KEYS.forEach(listKey => {
      if (listKey !== except) closeCountryList(listKey);
    });
  }

  function getCountryControlByKey(listKey) {
    return countryControls[listKey];
  }

  function getCountryListByKey(listKey) {
    return getCountryControlByKey(listKey).list;
  }

  function toggleCountryList(listKey) {
    const control = getCountryControlByKey(listKey);
    const isOpen = !control.list.hidden;
    closeOtherCountryLists(listKey);
    control.list.hidden = isOpen;
    control.button.setAttribute('aria-expanded', String(!isOpen));
  }

  function getSelectedCountryByKey(listKey) {
    return selectedCountries[listKey];
  }

  function setCountryByKey(listKey, countryData) {
    const control = getCountryControlByKey(listKey);
    selectedCountries[listKey] = countryData;
    applyCountryToInput(
      countryData,
      control.text,
      control.codeInput,
      control.phoneInput,
      () => validatePhoneByKey(listKey)
    );
  }

  function isPhoneValidByKey(listKey) {
    const control = getCountryControlByKey(listKey);
    const selectedCountry = getSelectedCountryByKey(listKey);
    const pattern = new RegExp(`^\\d{${selectedCountry.length}}$`);
    return pattern.test(control.phoneInput.value);
  }

  function validatePhoneByKey(listKey) {
    const control = getCountryControlByKey(listKey);
    const selectedCountry = getSelectedCountryByKey(listKey);
    sanitizePhoneInput(control.phoneInput, selectedCountry.length);

    if (control.enforce() && control.phoneInput.value.length > 0 && !isPhoneValidByKey(listKey)) {
      control.phoneInput.setCustomValidity(
        `Enter ${selectedCountry.length} digits for ${selectedCountry.name} (${selectedCountry.code}).`
      );
    } else {
      control.phoneInput.setCustomValidity('');
    }
  }

  function selectCountryOptionByKey(listKey, optionElement) {
    setCountryByKey(listKey, getCountryDataFromOption(optionElement));
    closeCountryList(listKey);
  }

  function getCountryOptions(listElement) {
    return Array.from(listElement.querySelectorAll('.country-option'));
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
    for (const listKey of COUNTRY_KEYS) {
      if (!getCountryListByKey(listKey).hidden) return listKey;
    }
    return '';
  }

  function selectCountryOptionByListKey(listKey, optionElement) {
    selectCountryOptionByKey(listKey, optionElement);
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
      loginOtpCode.setCustomValidity(t('login.otpValidation'));
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
    loginSubmitBtn.textContent = loginUsesPhone ? t('login.sendCode') : t('auth.loginTitle');
    loginFormMessage.textContent = '';
    loginFormMessage.classList.remove('success');
    validateLoginOtp();
    stopLoginResendTimer();
    loginResendSecondsLeft = 60;
    syncLoginResendState();
  }

  function enterLoginPhoneCodeStep() {
    const loginCountry = getSelectedCountryByKey('login');
    loginPhoneCodeStep = true;
    closeCountryList('login');
    loginCodeWrap.hidden = false;
    loginOtpCode.required = true;
    loginPhoneInput.readOnly = true;
    loginCountryBtn.disabled = true;
    loginSubmitBtn.textContent = t('login.verifyCode');
    loginFormMessage.textContent = formatText(t('login.codeSent'), {
      code: loginCountry.code,
      phone: loginPhoneInput.value,
    });
    loginFormMessage.classList.add('success');
    loginOtpCode.focus();
    startLoginResendTimer();
  }

  function syncLanguageDependentText() {
    loginOtpCode.placeholder = t('login.enterOtpPlaceholder');
    loginModeToggle.textContent = loginUsesPhone ? t('login.modeUsername') : t('login.modePhone');
    loginSubmitBtn.textContent = loginUsesPhone
      ? (loginPhoneCodeStep ? t('login.verifyCode') : t('login.sendCode'))
      : t('auth.loginTitle');
  }

  function setLoginMode(usePhone) {
    loginUsesPhone = usePhone;
    loginUsernameWrap.hidden = usePhone;
    loginPhoneWrap.hidden = !usePhone;
    loginPasswordWrap.hidden = usePhone;
    loginUsername.required = !usePhone;
    loginPassword.required = !usePhone;
    loginPhoneInput.required = usePhone;
    loginModeToggle.textContent = usePhone ? t('login.modeUsername') : t('login.modePhone');
    loginSubmitBtn.textContent = usePhone ? t('login.sendCode') : t('auth.loginTitle');
    resetLoginPhoneCodeStep();
    validatePhoneByKey('login');
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
      setCountryByKey('login', DEFAULT_COUNTRY);
      setLoginMode(false);
    } else {
      registerForm.reset();
      setCountryByKey('register', DEFAULT_COUNTRY);
      registerRepeatPassword.setCustomValidity('');
    }
  }

  function closeAuthModal() {
    authOverlay.hidden = true;
    document.body.classList.remove('auth-open');
    closeCountryList('login');
    closeCountryList('register');
    resetLoginPhoneCodeStep();
    loginFormMessage.classList.remove('success');
  }

  function validateRepeatPassword() {
    if (registerRepeatPassword.value && registerRepeatPassword.value !== registerPassword.value) {
      registerRepeatPassword.setCustomValidity(t('auth.passwordMismatch'));
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

  COUNTRY_KEYS.forEach(listKey => {
    buildCountryOptions(getCountryListByKey(listKey));
    setCountryByKey(listKey, DEFAULT_COUNTRY);
  });

  const storedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (storedLang && Object.prototype.hasOwnProperty.call(I18N, storedLang)) {
    applyLanguage(storedLang);
  } else {
    applyLanguage(LANG_DEFAULT);
  }

  setLoginMode(false);

  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLang = (button.dataset.lang || LANG_DEFAULT).trim().toLowerCase();
      applyLanguage(selectedLang);
      document.body.classList.remove('page-locked');
      gate.classList.add('hidden');
      playEnterAnimation();
    });
  });

  COUNTRY_KEYS.forEach(listKey => {
    const control = getCountryControlByKey(listKey);

    control.button.addEventListener('click', event => {
      event.stopPropagation();
      toggleCountryList(listKey);
    });

    control.list.addEventListener('click', event => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.classList.contains('country-option')) return;
      selectCountryOptionByKey(listKey, target);
    });
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
    const loginCountry = getSelectedCountryByKey('login');
    if (loginResendCodeBtn.disabled) return;
    startLoginResendTimer();
    loginFormMessage.textContent = formatText(t('login.newCodeSent'), {
      code: loginCountry.code,
      phone: loginPhoneInput.value,
    });
    loginFormMessage.classList.add('success');
  });

  document.addEventListener('click', event => {
    if (!(event.target instanceof Node)) return;

    COUNTRY_KEYS.forEach(listKey => {
      const control = getCountryControlByKey(listKey);
      if (!control.list.contains(event.target) && !control.button.contains(event.target)) {
        closeCountryList(listKey);
      }
    });

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

  orderPhoneInput.addEventListener('input', () => validatePhoneByKey('order'));
  loginPhoneInput.addEventListener('input', () => validatePhoneByKey('login'));
  loginOtpCode.addEventListener('input', validateLoginOtp);
  registerPhoneInput.addEventListener('input', () => validatePhoneByKey('register'));
  registerPassword.addEventListener('input', validateRepeatPassword);
  registerRepeatPassword.addEventListener('input', validateRepeatPassword);

  orderForm.addEventListener('submit', event => {
    event.preventDefault();
    validatePhoneByKey('order');

    if (!isPhoneValidByKey('order')) {
      orderPhoneInput.reportValidity();
      formMessage.textContent = t('order.invalidPhone');
      formMessage.classList.remove('success');
      return;
    }

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      formMessage.textContent = t('order.invalidForm');
      formMessage.classList.remove('success');
      return;
    }

    formMessage.textContent = t('order.success');
    formMessage.classList.add('success');
    orderForm.reset();
    setCountryByKey('order', DEFAULT_COUNTRY);
  });

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    if (loginUsesPhone) {
      validatePhoneByKey('login');

      if (!isPhoneValidByKey('login')) {
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
    validatePhoneByKey('register');
    validateRepeatPassword();

    if (!isPhoneValidByKey('register')) {
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
