const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin([`../src/img/*.{jpg,png}`], {
    destination: `../src/img`,
    plugins: [imageminWebp({ quality: 95 })],
  });

  console.log(files);
})();
