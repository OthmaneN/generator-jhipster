package <%=packageName%>.domain;

import java.lang.Comparable;
import javax.persistence.*;
import java.util.Objects;

@Embeddable
public class Location implements Comparable<Location>{
    @Column(name="longitude")
    private double longitude;

    @Column(name="latitude")
    private double latitude;

    public Location() {
    }

    public Location(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
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
        return Double.compare(location.longitude, longitude) == 0 &&
            Double.compare(location.latitude, latitude) == 0;
    }

    @Override
    public int hashCode() {

        return Objects.hash(longitude, latitude);
    }
}
