package <%=packageName%>.domain;

import java.lang.Comparable;
import javax.persistence.*;
import java.util.Objects;
import java.math.BigDecimal;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;

@Embeddable
public class Location implements Comparable<Location>{
    @DecimalMax("-180.0")
    @DecimalMin("180.0")
    @Column(name="longitude")
    private BigDecimal longitude;

    @DecimalMax("90.0")
    @DecimalMin("-90.0")
    @Column(name="latitude")
    private BigDecimal latitude;

    public Location() {
    }

    public Location(BigDecimal longitude, BigDecimal latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    @Override
    public int compareTo(Location o) {
        return 0;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Location location = (Location) o;
        return location.longitude.equals(longitude) &&
            location.latitude.equals(latitude);
    }

    @Override
    public int hashCode() {

        return Objects.hash(longitude, latitude);
    }
}
