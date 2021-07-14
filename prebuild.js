const fs = require('fs');
const existsSync = fs.existsSync;
const lstatSync = fs.lstatSync;
const readdirSync = fs.readdirSync;
const readFileSync = fs.readFileSync;
const writeFileSync = fs.writeFileSync;

const path = require('path');
const join = path.join;

const isDir = contentPath => {
	return fileName => {
		return lstatSync(join(contentPath, fileName)).isDirectory();
	};
};

const subDirs = (contentPath, f) => {
	return dirName => {
		return readdirSync(join(contentPath, dirName))
			.filter(f(contentPath, dirName))
			.map(x => { return {author: dirName, value: x}; });
	};
};



const main = (contentPath, outputFileName, outputStrings, filterFn) => {
	const content = readdirSync(contentPath)
		.filter(isDir(contentPath))
		.map(subDirs(contentPath, filterFn))
		.flat();

	const outputFile = join(contentPath, outputFileName);
	writeFileSync(outputFile, '// This is an auto-generated file. Do not modify.\n\n');
	outputStrings.forEach(o => {
		writeFileSync(outputFile, content.map(o[0]).join("\n"), { flag: 'a' });
		writeFileSync(outputFile, o[1], { flag: 'a' });
	});
};

main(
		'src/translations/en_US/content',
		'index.ts',
		[
			[
				data => {return `import ${data.value} from './${data.author}/${data.value}/messages.json';`},
				'\n\nexport default {\n',
			],
			[
				data => {return `  ...${data.value},`},
				'\n};',
			],
		],
		(contentPath, dirName) => x => { return existsSync(join(contentPath, dirName, x, "messages.json")); }
);

main(
		'src/rng',
		'classes/index.ts',
		[
			[
				data => {return `import { ${data.value} } from 'rng/${data.author}/${data.value}';`},
				'\n\nexport const classes = {\n',
			],
			[
				data => {return `  ${data.value},`},
				'\n};',
			],
		],
		(contentPath, dirName) => x => {
			const file = join(contentPath, dirName, x, "index.ts")
			return existsSync(file) && readFileSync(file).includes('Character');
		}
);
