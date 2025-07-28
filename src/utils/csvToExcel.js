// CSV to Excel conversion utility (Node.js script)
// To run: node src/utils/csvToExcel.js

const fs = require('fs');
const path = require('path');

// Read CSV data
const csvData = `name,category,rating,reviews,address,city,state,zipcode,phone,email,specialties,experience_years,portfolio_url,description
De Panache,Interior Designers & Decorators,4.8,161,"No. 45 7th Cross 16 B Main 4th B Block Koramangala Extension",Bangalore,Karnataka,560034,+91-80-41234567,contact@depanache.com,"Residential Design, Commercial Interiors, Space Planning",15,https://depanache.com,"De Panache has been an interior design and execution firm based in Bangalore for the last ten years. The company specializes in creating beautiful and functional spaces."
asense,Interior Designers & Decorators,4.9,135,"Koramangala 5th Block",Bangalore,Karnataka,560037,+91-80-41234568,hello@asense.design,"Modular Kitchens, Living Room Design, Bedroom Interiors",8,https://asense.design,"End your quest for high style and ultra-modern signature modular home interiors with ASENSE's creative fusions implementation."
Artis Interiorz Pvt. Ltd.,Interior Designers & Decorators,4.9,89,"Bangalore Urban",Bangalore,Karnataka,560048,+91-80-41234569,info@artisinteriorz.com,"Turnkey Interior Solutions, Residential Projects, Commercial Design",12,https://artisinteriorz.com,"Artis Interiorz Pvt. Ltd. is an Turnkey Interior Design Solution firm founded in year 2012 in Bangalore with Mission to provide quality interior design services."
Modern Space Architects,Architects & Building Designers,4.7,203,"MG Road",Bangalore,Karnataka,560001,+91-80-41234570,contact@modernspace.com,"Residential Architecture, Commercial Buildings, Sustainable Design",18,https://modernspace.com,"Leading architectural firm specializing in contemporary design solutions for residential and commercial projects."
Classic Home Builders,Home Builders & Construction Companies,4.6,145,"Indiranagar",Bangalore,Karnataka,560038,+91-80-41234571,info@classichome.com,"Custom Homes, Renovations, Project Management",20,https://classichome.com,"Experienced home builders with a focus on quality construction and customer satisfaction for over two decades."
Green Thumb Landscapes,Landscape Architects & Contractors,4.8,92,"Whitefield",Bangalore,Karnataka,560066,+91-80-41234572,design@greenthumb.com,"Garden Design, Outdoor Living, Irrigation Systems",10,https://greenthumb.com,"Creating beautiful outdoor spaces with sustainable landscaping solutions and innovative design concepts."
Elite Kitchen Designers,Kitchen & Bath Designers,4.9,156,"HSR Layout",Bangalore,Karnataka,560102,+91-80-41234573,hello@elitekitchen.com,"Modular Kitchens, Bathroom Design, Storage Solutions",14,https://elitekitchen.com,"Specialists in creating functional and beautiful kitchen and bathroom spaces with premium materials and craftsmanship."
Urban Loft Interiors,Interior Designers & Decorators,4.7,178,"Koramangala 6th Block",Bangalore,Karnataka,560095,+91-80-41234574,contact@urbanloft.com,"Loft Design, Industrial Style, Contemporary Interiors",9,https://urbanloft.com,"Experts in urban and contemporary interior design with a focus on maximizing space and style."
Prime Contractors Ltd,Civil Engineers & Contractors,4.5,234,"Electronic City",Bangalore,Karnataka,560100,+91-80-41234575,projects@primecontractors.com,"Construction Management, Structural Engineering, Project Planning",25,https://primecontractors.com,"Leading construction company with extensive experience in residential and commercial projects across South India."
Creative Spaces Studio,Design-Build Firms,4.8,167,"Jayanagar",Bangalore,Karnataka,560041,+91-80-41234576,studio@creativespaces.com,"Full-Service Design, Build Management, Interior Architecture",16,https://creativespaces.com,"Comprehensive design-build services from concept to completion with focus on innovative and functional design solutions."
Luxury Living Designs,Interior Designers & Decorators,4.9,198,"UB City Mall",Bangalore,Karnataka,560001,+91-80-41234577,luxury@livingdesigns.com,"High-End Interiors, Custom Furniture, Luxury Homes",22,https://luxurylivingdesigns.com,"Premier interior design firm specializing in luxury residential and commercial spaces with bespoke design solutions."
Tech Home Automation,Specialty Contractors,4.6,143,"Marathahalli",Bangalore,Karnataka,560037,+91-80-41234578,tech@homeautomation.com,"Smart Home Systems, Audio/Video Installation, Security Systems",7,https://techhomeautomation.com,"Cutting-edge home automation solutions for modern living with integrated technology and smart home systems."
Eco Build Solutions,Home Builders & Construction Companies,4.7,189,"Hebbal",Bangalore,Karnataka,560024,+91-80-41234579,eco@buildsolutions.com,"Green Building, Sustainable Construction, Energy Efficient Homes",13,https://ecobuildsolutions.com,"Environmentally conscious construction company specializing in sustainable building practices and green technologies."
Heritage Architects,Architects & Building Designers,4.8,176,"Basavanagudi",Bangalore,Karnataka,560004,+91-80-41234580,heritage@architects.com,"Traditional Architecture, Heritage Restoration, Cultural Projects",28,https://heritagearchitects.com,"Preserving architectural heritage while creating timeless designs that blend tradition with modern functionality."
Modular Kitchen Experts,Kitchen & Bath Designers,4.9,213,"BTM Layout",Bangalore,Karnataka,560068,+91-80-41234581,experts@modularkitchen.com,"German Kitchens, Italian Design, Premium Appliances",11,https://modularkitchenexperts.com,"Specialists in high-end modular kitchens with European design sensibilities and premium quality materials."`;

// Parse CSV and create formatted output
function csvToFormattedText(csvData) {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(',');
  const rows = lines.slice(1);
  
  let output = '# Professional Directory\n\n';
  
  rows.forEach((row, index) => {
    const values = row.split(',');
    const professional = {};
    
    headers.forEach((header, i) => {
      professional[header] = values[i] ? values[i].replace(/"/g, '') : '';
    });
    
    output += `## ${professional.name}\n`;
    output += `**Category:** ${professional.category}\n`;
    output += `**Rating:** ${professional.rating} ⭐ (${professional.reviews} reviews)\n`;
    output += `**Address:** ${professional.address}, ${professional.city}, ${professional.state} ${professional.zipcode}\n`;
    output += `**Phone:** ${professional.phone}\n`;
    output += `**Email:** ${professional.email}\n`;
    output += `**Experience:** ${professional.experience_years} years\n`;
    output += `**Specialties:** ${professional.specialties}\n`;
    output += `**Description:** ${professional.description}\n`;
    output += `**Website:** ${professional.portfolio_url}\n\n`;
    output += '---\n\n';
  });
  
  return output;
}

// Generate formatted output
const formattedData = csvToFormattedText(csvData);

console.log('Professional Directory Data:');
console.log('============================');
console.log(formattedData);

// If you want to save to a file
const outputPath = path.join(__dirname, '../data/professionals_formatted.md');
fs.writeFileSync(outputPath, formattedData, 'utf8');
console.log(`Data saved to: ${outputPath}`);

// Export for use in React components
module.exports = { csvData, formattedData };