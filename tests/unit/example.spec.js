import { shallowMount } from '@vue/test-utils'
import Beitrag from '@/components/Beitrag.vue'
import Favorites from '@/components/Favorites.vue'
import Filme from '@/components/Filme.vue'

describe('Beitrag.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Beitrag, {
      data () {
        return {
          movies: [
            { title: 'To The Moon', date: '11. Juli 2024', imgSrc: 'ToTheMoon.png' },
            { title: 'Borderlands', date: '22. August 2024', imgSrc: 'Borderlands.png' },
            { title: 'Alles Fifty Fifty', date: '29. August 2024', imgSrc: 'FührerUndVerführer.png' },
            { title: 'Führer und Verführer', date: '11. Juli 2024', imgSrc: 'AllesFiftyFifty.jpg' },
            { title: 'Zwei zu Eins', date: '25. Juli 2024', imgSrc: 'ZweiZuEins.png' }
          ],
          games: [
            { title: 'Black Myth: Wukong', date: '20. August 2024', imgSrc: 'black-myth-wukong-jjjfw.png' },
            { title: 'Silent Hill 2 Remake', date: '8. Oktober 2024', imgSrc: 'silent-hill-2-remake_gjje.jpg' },
            { title: 'Stalker 2', date: '5. September 2024', imgSrc: 'stalker-md.jpg' },
            { title: 'Mario & Luigi: Brothership', date: '7. November 2024', imgSrc: 'Mario&Luigi_Brothership.jpg' },
            { title: 'Grand Theft Auto VI', date: 'Herbst 2025', imgSrc: 'Grand_Theft_Auto_VI.png' }
          ],
          favorites: []
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render correct contents', () => {
    expect(wrapper.find('.logo-container').exists()).toBe(true)
    expect(wrapper.findAll('.fard').length).toBe(5)
    expect(wrapper.findAll('.gard').length).toBe(5)
  })

  it('should toggle favorite status of a movie', async () => {
    const movie = wrapper.vm.movies[0]
    await wrapper.vm.toggleFavorite(movie)
    expect(wrapper.vm.favorites).toContain(movie)
    await wrapper.vm.toggleFavorite(movie)
    expect(wrapper.vm.favorites).not.toContain(movie)
  })

  it('should toggle favorite status of a game', async () => {
    const game = wrapper.vm.games[0]
    await wrapper.vm.toggleFavorite(game)
    expect(wrapper.vm.favorites).toContain(game)
    await wrapper.vm.toggleFavorite(game)
    expect(wrapper.vm.favorites).not.toContain(game)
  })

  it('should save favorites to localStorage', async () => {
    const movie = wrapper.vm.movies[0]
    await wrapper.vm.toggleFavorite(movie)
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    expect(favorites).toContainEqual(movie)
  })

  it('should load favorites from localStorage on created', () => {
    const movie = wrapper.vm.movies[0]
    localStorage.setItem('favorites', JSON.stringify([movie]))
    wrapper.vm.loadFavorites()
    expect(wrapper.vm.favorites).toContainEqual(movie)
  })
})

describe('Favorites.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Favorites, {
      data () {
        return {
          favorites: [
            { title: 'To The Moon', date: '11. Juli 2024', imgSrc: 'ToTheMoon.png' },
            { title: 'Black Myth: Wukong', date: '20. August 2024', imgSrc: 'black-myth-wukong-jjjfw.png' }
          ]
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render correct contents', () => {
    expect(wrapper.find('h1').text()).toBe('Favoriten')
    expect(wrapper.findAll('.card').length).toBe(2)
  })

  it('should show a message when there are no favorites', async () => {
    wrapper.setData({ favorites: [] })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.row-container').exists()).toBe(false)
    expect(wrapper.text()).toContain('Keine Favoriten vorhanden!')
  })

  it('should toggle favorite status and remove from list', async () => {
    const favorite = wrapper.vm.favorites[0]
    await wrapper.vm.toggleFavorite(favorite)
    expect(wrapper.vm.favorites).not.toContain(favorite)
  })

  it('should save favorites to localStorage', async () => {
    const favorite = wrapper.vm.favorites[0]
    await wrapper.vm.toggleFavorite(favorite)
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    expect(favorites).not.toContainEqual(favorite)
  })
})

describe('Filme.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Filme, {
      data () {
        return {
          movies: [
            { title: 'To The Moon', date: '11. Juli 2024', imgSrc: 'ToTheMoon.png' },
            { title: 'Borderlands', date: '22. August 2024', imgSrc: 'Borderlands.png' },
            { title: 'Alles Fifty Fifty', date: '29. August 2024', imgSrc: 'FührerUndVerführer.png' },
            { title: 'Führer und Verführer', date: '11. Juli 2024', imgSrc: 'AllesFiftyFifty.jpg' },
            { title: 'Zwei zu Eins', date: '25. Juli 2024', imgSrc: 'ZweiZuEins.png' }
          ],
          favorites: []
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render correct contents', () => {
    expect(wrapper.find('h1').text()).toBe('Filme')
    expect(wrapper.findAll('.fard').length).toBe(5)
  })

  it('should toggle favorite status of a movie', async () => {
    const movie = wrapper.vm.movies[0]
    await wrapper.vm.toggleFavorite(movie)
    expect(wrapper.vm.favorites).toContain(movie)
    await wrapper.vm.toggleFavorite(movie)
    expect(wrapper.vm.favorites).not.toContain(movie)
  })

  it('should save favorites to localStorage', async () => {
    const movie = wrapper.vm.movies[0]
    await wrapper.vm.toggleFavorite(movie)
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    expect(favorites).toContainEqual(movie)
  })

  it('should load favorites from localStorage on created', () => {
    const movie = wrapper.vm.movies[0]
    localStorage.setItem('favorites', JSON.stringify([movie]))
    wrapper.vm.loadFavorites()
    expect(wrapper.vm.favorites).toContainEqual(movie)
  })
})
