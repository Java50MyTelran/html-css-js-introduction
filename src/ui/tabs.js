const ACTIVE = 'active';
const HIDDEN = 'hidden'
export class Tabs {
    #sectionsElements;
    #tabsElements
    constructor(parentId, sections) {
        //sections - array of objects
        // each object contains id value of section and a tab name
        this.#sectionsElements = sections.map(sobj =>
            document.getElementById(sobj.id));
        const sectionTabsElement = document.getElementById(parentId);
        sectionTabsElement.innerHTML = sections.map(sobj =>
            `<button class="button-menu">${sobj.name}</button>`).join('');
        this.#tabsElements = document.querySelectorAll(".button-menu");
        this.#tabsElements.forEach((element, index) => {
            element.addEventListener("click",() => this.#openTabAtIndex(index))
        })
    }
    #openTabAtIndex(index) {
        this.#sectionsElements.forEach(element => element.classList.add(HIDDEN));
        this.#tabsElements.forEach(element => element.classList.remove(ACTIVE));
        this.#sectionsElements[index].classList.remove(HIDDEN);
        this.#tabsElements[index].classList.add(ACTIVE);
    }
}