package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSuccssDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private String saleName;
	private Long visited;
	private Long deals;

	public SaleSuccssDTO() {
	}
		
	public SaleSuccssDTO(Seller seller, Long visited, Long deals) {
		saleName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}

	public String getSaleName() {
		return saleName;
	}

	public void setSaleName(String saleName) {
		this.saleName = saleName;
	}

	public Long getVisited() {
		return visited;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}
}
