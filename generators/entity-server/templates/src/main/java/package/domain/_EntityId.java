package <%=packageName%>.domain;

import java.io.Serializable;

/**
 * A <%= entityClass %> Id.
 */
public class <%= entityClass %>Id implements Serializable {

	private Long id;
	<%_
		let fieldsPK = [];
		for (idx in fields) {
				const fieldValidate = fields[idx].fieldValidate;
				const fieldValidateRules = fields[idx].fieldValidateRules;
			    if (fieldValidate === true && fieldValidateRules.includes('primary key')) {
			    	fieldsPK.push(fields[idx])
	_%>
	private <%= fields[idx].fieldType %> <%= fields[idx].fieldName %>;
	<%_
			    }
		}
	_%>

	<%_ if (fieldsPK.length !== 0) { _%>
	public <%= entityClass %>Id() {

	}
	<%_
	}
	_%>

	public <%= entityClass %>Id(Long Id <%_ for (idx in fieldsPK) { _%> , <%= fieldsPK[idx].fieldType %> <%= fieldsPK[idx].fieldName %> <%_ } _%>) {
		this.id = id;
	<%_ for (idx in fieldsPK) {
		const fieldName = fieldsPK[idx].fieldName;
	_%>
		this.<%= fieldName %> = <%= fieldName %>;
	<%_
	}
	_%>
	}

	public Long getId() {
		return id;
	}

	<%_ for (idx in fieldsPK) {
		const fieldType = fieldsPK[idx].fieldType;
		const fieldName = fieldsPK[idx].fieldName;
		const fieldInJavaBeanMethod = fieldsPK[idx].fieldInJavaBeanMethod;
	_%>
	public <%= fieldType %> get<%= fieldInJavaBeanMethod %>() {
		return <%= fieldName %>;
	}
	<%_
	}
	_%>

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				<%_ for (idx in fieldsPK) {
					const fieldName = fieldsPK[idx].fieldName; _%>
				+ ((<%= fieldName %> == null) ? 0 : <%= fieldName %>.hashCode())
				<%_
				}
				_%>
				<%=";"%>
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		<%= entityClass %>Id other = (<%= entityClass %>Id) obj;
		<%_ for (idx in fieldsPK) {
			const fieldType = fieldsPK[idx].fieldType;
			const fieldName = fieldsPK[idx].fieldName;
		_%>

		if (id != other.id)
			return false;

		if (<%= fieldName %> == null) {
			if (other.<%= fieldName %> != null)
				return false;
		} else if (!<%= fieldName %>.equals(other.<%= fieldName %>))
			return false;
		<%_
		}
		_%>

		return true;
	}


}
