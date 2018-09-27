export var adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    {label: 'Painel', separator: true},
    {label: 'Dashboard', route: '/Inicio', iconClasses: 'fa fa-line-chart'},
    {label: 'Ingressos', route: '/Ingressos', iconClasses: 'fa fa-ticket'},
    {label: 'Áudios', route: '/Audios', iconClasses: 'fa fa-volume-up'},
    {
      label: 'Usuários', route: '/Admin/Usuarios', iconClasses: 'fa fa-user'},
    {label: 'Logout', separator: true},
    {label: 'Sair', route: '/', iconClasses: 'fa fa-sign-out'},
  ]
};