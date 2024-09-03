export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.imgUrl = data.imgUrl;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.creatorId = data.creatorId;
    this.creator = data.creator;
  }


  get listingHTMLTemplate() {
    return `
    <div class="col-md-6">
      <section class="row house-listing">
        <div class="col-md-4">
          <img src="${this.imgUrl}" alt="${this.description}" class="img-fluid" style="object-fit: cover;">
        </div>
        <div class="col-md-8">
          <h4>${this.description}</h4>
          <p>${this.bedrooms} bedrooms - ${this.bathrooms} bathrooms - ${this.levels} floors</p>
          <p>Built: ${this.year}</p>
          <h5>$${this.price}</h5>
          <p>${this.creator.name}</p>
        </div>
      </section>
    </div>
    `
  }
}

/*
bedrooms: Number, required
bathrooms: Number, required
levels: Number, required
imgUrl: String, 
year: Number, required
price: Number, required
description: String, 
creatorId: SchemaObjectId, required
*creator: Object (Virtual Added by Database)
*createdAt: ISO Timestamp (Virtual Added by Database)
*updatedAt: ISO Timestamp (Virtual Added by Database)
*/