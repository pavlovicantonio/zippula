export async function loadFonts() {
  const webFontLoader = await import('webfontloader')

  webFontLoader.load({
    google: {
      families: ['Fredoka:300,400,500,600,700&display=swap'],
    },
  })
}
