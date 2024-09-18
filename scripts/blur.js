import { encode } from 'blurhash';
import { getPixels } from '@unpic/pixels';
import { blurhashToCssGradientString } from '@unpic/placeholder';

process.argv.slice(2).forEach(async (v) => {
  const jpgData = await getPixels(v);

  console.log(
    `${v}: ${blurhashToCssGradientString(
      encode(Uint8ClampedArray.from(jpgData.data), jpgData.width, jpgData.height, 4, 4)
    )}`
  );
});
