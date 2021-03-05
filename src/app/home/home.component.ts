import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

import { Product } from '../_interfaces/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  content?: string;
  products: Product[] = [];

  displayedColumns: string[] = ['name', 'description', 'price', 'action'];

  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatTable, { static: true }) table: MatTable<Product> | undefined;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog) { }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any) {
    this.dataSource.data.push({
      name: row_obj.name,
      description: row_obj.description,
      price: row_obj.price
    });
    if(this.table)
    this.table.renderRows();
  }

  updateRowData(row_obj: any) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        this.productService.updateProduct(row_obj).subscribe();
        value.name = row_obj.name;
        value.description = row_obj.description;
        value.price = row_obj.price;
      }
      return true;
    });
  }

  deleteRowData(row_obj: any) {
    this.dataSource.data = this.dataSource.data.filter((value: any, key: any) => {
      return value.id != row_obj.id;
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => {
        if (data)
          this.products = data;
        this.dataSource.data = this.products;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  ngAfterViewInit() {
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
  }
}
