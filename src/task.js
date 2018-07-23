class Task {
  static clickHandler(e) {
    if (e.target.className === 'delete') {
      const parentEl = e.target.parentElement
      //targets the parent Element of the #tasks in this case
      parentEl.remove()
      //actually removes
    }
  }
}
