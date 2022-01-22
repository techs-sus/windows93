export default class Packager {
	packages: string[]; // Package list to resolve
	constructor() {
		this.packages = [];
	}
	addPackage(packageName: string) {
		this.packages.push(packageName);
	}
}
