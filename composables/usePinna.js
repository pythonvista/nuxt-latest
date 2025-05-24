import { defineStore } from 'pinia';

export const useAdminStore = defineStore({
  id: 'admin-store',
  state: () => {
    return {
      activeUser: '',
      countries: ['Nigeria'],
      appName: 'EMETERR ADMIN',
      userData: {},
      userAccount: {},
      isAuth: false,
      banks: [
        'First Bank of Nigeria',
        'UBA',
        'Access (Diamond) Bank',
        'Wema Bank',
        'Heritage Bank',
        'Polarise Bank',
        'Stanbic IBTC',
        'Sterling Bank',
        'Union Bank',
        'Zenith Bank',
        'Unity Bank',
        'FCMBank',
        'GTBank',
        'FIdelity Bank',
        'ECO Bank',
        'Kuda Bank',
        'Opay',
        'Palm Pay',
        'Monepoint',
        'Standard Chatered Bank',
        'Carbon One Finance'
      ],
      permissions: {},
      headerTitle: '',
    };
  },
  actions: {
    SetActiveUser(id, set) {
      let name = 'activeUser';
      if (set) {
        this.activeUser = id;
        localStorage.setItem(name, id);
      } else {
        this.activeUser = '';
      }
    },
    SetUserData(data) {
      this.userData = data;
    },
    SetAuth(data) {
      this.isAuth = data
    },
    SetHeaderTitle(data) {
      this.headerTitle = data
    },
    SetPermissions(perm) {
      this.permissions = perm
    }
  },
  getters: {
    // filtersList: state => state.filtersList,
  }
});
