import { Component, signal } from '@angular/core';
import { HeaderComponent, HeaderNavigation } from '../../projects/ui-header/src/public-api';
import { TreeViewComponent } from './tree-view.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TreeViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-header-workspace');

  headerConfig: HeaderNavigation = {
    navigation: {
      tabs: [
        {
          name: 'Home',
          href: '/home',
          type: 'tab',
        },
        {
          name: 'Direciona tech',
          type: 'dropdown',
          sections: [
            {
              title: 'titulo do links para owner',
              links: [
                {
                  label: 'label - link',
                  href: '#',
                },
                {
                  label: 'label - link',
                  href: '#',
                },
              ],
            },
            {
              title: 'titulo do links para user',
              links: [
                {
                  label: 'label - link',
                  href: '#',
                },
                {
                  label: 'label - link',
                  href: '#',
                },
              ],
            },
          ],
        },
        {
          name: 'IAB',
          type: 'dropdown',
          sections: [
            {
              title: 'titulo do links IAB',
              links: [
                {
                  label: 'label - link',
                  href: '#',
                },
                {
                  label: 'label - link',
                  href: '#',
                },
              ],
            },
          ],
        },
        {
          name: 'Admin',
          href: '/admin',
          type: 'tab',
        },
      ],
    },
  };

  MENU_DATA = {
    menuItems: [
      {
        label: 'Página inicial',
        path: 'home/',
      },
      {
        label: 'DirecionaTech',
        subItems: [
          {
            title: 'Para Owners e Pontos focais',
            items: [
              {
                label: 'Visualizar ou editar itens do DirecionaTech',
                path: 'DirecionaTech/visao-geral',
              },
              {
                label: 'Solicitar entrada de um item novo',
                path: 'DirecionaTech/direcionadores-candidatos',
              },
              {
                label: 'Executar itens planejados',
                path: 'DirecionaTech/itens-planejados',
              },
            ],
          },
          {
            title: 'Para Comunidades/RTs',
            items: [
              {
                label: 'Buscar e responder demandas DirecionaTech',
                path: 'DirecionaTech/respostas',
              },
            ],
          },
          {
            title: 'Dashboards',
            items: [
              {
                label: 'Consultar os dashboards do DirecionaTech',
                path: 'DirecionaTech/dashboard',
              },
            ],
          },
        ],
      },
      {
        label: 'Itaú Advisory Board',
        subItems: [
          {
            title: 'Tabela de solicitações',
            items: [
              {
                label: 'Visualizar Solicitações do IAB',
                path: '/itau-advisory-board',
              },
            ],
          },
          {
            title: 'Dashboard',
            items: [
              {
                label: 'Consultar o dashboard do IAB',
                path: '/itau-advisory-board/dashboard-iab',
              },
            ],
          },
        ],
      },
    ],
  };
}
